import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import '../../../css/atividades-reu.css';
import botaomais from '../../../images/botaomais.png';
import conexaoApi from "../../../axios/config";
import formataData from "../../../components/funcoes_compartilhadas/formatarData";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import Loader from "../../../components/Loader";
import Reunioesinseri from "./Reunioesinseri";
import Message from "../../../components/Message";
import { useLocation } from "react-router-dom";

const Reunioes = () => {

  const [reunioes, setReunioes] = useState([]);
  const [removerLoader, setRemoverLoader] = useState(false);
  const location = useLocation()
  let message = "";

  if (location.state) message = location.state.message

  const getReunioes = async () => {
    try {
      const response = await conexaoApi.get("/reuniaos");
      const data = response.data.data;

      setReunioes(data);
      setRemoverLoader(true)
    } catch (error) {
      console.log(error);
    }
  };

  // Função excluir reuniao
  const apagarReuniao = async (id) => {
    if (window.confirm('Tem certeza que deseja apagar?')) {
      console.log(id);
      await conexaoApi.delete(`/reuniaos/${id}`);
      getReunioes();
    }
  }

  useEffect(() => {
    getReunioes();
  }, []);


  return (

    <main className='main-transparent'>
      {message && (<Message mensagem={message} />)}

      <div className='conteudo'>
        {reunioes.length > 0 && reunioes.map((reuniao) => (
          <div className='nav' key={reuniao.id}>

            <div className='btn-atv-reu'>
              <div className="head-btn">
                <div className='titulo-e-btns'>
                  <h className='text-titulo'>{reuniao.attributes.titulo}</h>
                </div>
                <div id="btn-acss-delet">
                  <div >
                    <NavLink to={`/reunioes/${reuniao.id}`}>
                      <button className="btns-reu"><BsBoxArrowInRight size={30} /></button>
                    </NavLink>
                  </div>
                  <button className="btns-reu" onClick={() => apagarReuniao(reuniao.id)}><BiTrash size={30} /></button>

                </div>
              </div>

              <div id='conteudo-btn-reu'>
                <h className='text-data'>Realizada: {formataData(reuniao.attributes.data_realizacao)}</h>
              </div>
            </div>

          </div>
        ))}
        {!removerLoader && <Loader />}
        {removerLoader && reunioes.length === 0 && (
          <Reunioesinseri />
        )}



      </div>
      <NavLink to='/cadastroreunioes'><button id="botao-mais"><img src={botaomais} alt='botaomais' /></button></NavLink>
    </main>

  );
};
export default Reunioes;