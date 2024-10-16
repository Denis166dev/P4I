import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../../../css/atividade-reuex.css';
import circulovermelho from '../../../images/circulovermelho.png';
import conexaoApi from "../../../axios/config";
import Loader from "../../../components/Loader";
import formataData from "../../../components/funcoes_compartilhadas/formatarData";

//import circuloamarelo from '../../../images/circuloamarelo.png';
//import circuloverde from '../../../images/circuloverde.png';


const Atividadeex = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [atividade, setAtividade] = useState([]);
    const [link, setLink] = useState("")

    const getAtividade = async () => {
        try {
            const response = await conexaoApi.get(`/artefatos/${id}`);
            const data = response.data.data;
            console.log(data)
            setAtividade(data);

        } catch (error) {
            console.log(error);
        }
    };
    function mudaEstado(event, setState) {
        const novoValor = event.target.value;
        setState(novoValor);
        console.log(novoValor)
    }

    const putAtividade = async () => {
        // entregar atividade
        if (link === "") {
            window.alert("nao pode ser vazio")
        } else {
            const atv = { link, status: "entregue" };
            console.log(atv);

            await conexaoApi.put(`/artefatos/${id}`, { data: atv });
            navigate("/atividades", { state: { message: "Atividade entregue" } })
        }
    }

    useEffect(() => {
        getAtividade();
        // eslint-disable-next-line
    }, []);

    return (
        <main className="main-transparent">
            {atividade.attributes ? (
                <main className="main-white">
                    <div id='titulo-status-ex'>
                        <h className='conteudo-head'>{atividade.attributes.nome}</h>
                        <h className='conteudo-head'>Status: <img src={circulovermelho} alt='circulovermelho' /></h>
                    </div>
                    <div id='prazo-atv'>
                        <h className='conteudo-prazo'>Prazo: {formataData(atividade.attributes.prazo)}</h><br></br>
                        {/*<h className='conteudo-prazo'>Disciplina: X</h>*/}
                    </div>

                    <div id='descricao'>
                        <h className='text-descricao-link'>{atividade.attributes.descricao}</h>
                    </div>

                    <div id='add-link'>
                        <h className='text-descricao-link'>Adicionar Link:</h>
                        <input type='url' id='input-atv' value={link} onChange={(event) => mudaEstado(event, setLink)} required />
                    </div>

                    <div id='position-btnred'>

                        <button className="btn-red" onClick={() => putAtividade()}>Entregar</button>

                    </div>
                </main>
            ) : <Loader />}


        </main>
    );
};

export default Atividadeex;