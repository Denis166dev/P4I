import { useState, useEffect } from "react";
import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import "../../../css/atividade-reuex.css";
import "../../../css/home.css";
import { useParams } from "react-router-dom";
import conexaoApi from "../../../axios/config";
import formataData from "../../../components/funcoes_compartilhadas/formatarData";
import Loader from "../../../components/Loader";

//const { Content } = Layout;
//`/posts/${id}`
const Reuniaoex = () => {
    const { id } = useParams();
    const [reuniao, setReuniao] = useState([]);

    const getReuniao = async () => {
        try {
            const response = await conexaoApi.get(`/reuniaos/${id}`);
            const data = response.data.data;
            console.log(data)
            setReuniao(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getReuniao();
        // eslint-disable-next-line
    }, []);
    return (
        <Layout>
            {reuniao.attributes ? (

                <main className='main-transparent'>
                    <main className="main-white">
                        <div id='titulo-status-ex'>
                            <h className='conteudo-head'>{reuniao.attributes.titulo}</h>
                            <h className='conteudo-head'>{`Realizada: ${formataData(reuniao.attributes.data_realizacao)}`}</h>
                        </div>


                        <div id='participantes-reu'>
                            <h className='conteudo-titulos-reu'>Participantes:</h>
                            <ul id='ul-reu'>
                                <li>Participante 1</li>
                                <li>Participante 2</li>
                                <li>Participante 3</li>
                                <li>Participante 4</li>
                                <li>Participante 5</li>
                            </ul>
                        </div>


                        <div id='objetivo-reu'>
                            <h className='conteudo-titulos-reu'>{`Objetivo: ${reuniao.attributes.objetivo}`}</h>
                        </div>
                        <div id='ata-reu'>
                            <h className='conteudo-titulos-reu'>{`Ata: ${reuniao.attributes.ata}`}</h>
                        </div>
                        <div id="position-btnred">
                            <NavLink to='/reunioes'><button className="btn-red">Fechar</button></NavLink>
                        </div>
                    </main>
                </main>

            ) : (<Loader />)}

        </Layout>
    );
};

export default Reuniaoex;