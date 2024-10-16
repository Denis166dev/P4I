import { useState, useContext, useEffect } from 'react';
import { ProjetoContext } from '../../../context/ProjetoContext';
import conexaoApi from '../../../axios/config';
import '../../../css/reunioesinseri.css';
import "../../../css/home.css"
import Loader from '../../../components/Loader';
import { Button } from 'antd';
import { WhatsAppOutlined, GitlabFilled, } from '@ant-design/icons';
import { FaGoogleDrive } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Grafico from '../../../components/Grafico';



const Inseri = () => {
  const { projetoCxt } = useContext(ProjetoContext); // contexto
  const [prj, setPrj] = useState([])

  const [removerLoader, setRemoverLoader] = useState(false);

  const getProjeto = async () => {
    try {
      const response = await conexaoApi.get(`/projetos/${projetoCxt}`);
      const data = response.data.data;

      setPrj(data);
      console.log(data)
      setRemoverLoader(true)
    } catch (error) {
      console.log(error);
      setRemoverLoader(true)
    }
  };
  useEffect(() => {
    getProjeto()
    // eslint-disable-next-line 
  }, []);

  return (
    <main className='main-transparent'>



      {prj.attributes && (
        <main className='main-white'>
          <div id='header'>
            <div><h1>{prj.attributes.nome}</h1></div>
            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <a href='https://www.whatsapp.com/?lang=pt_br' target="blank">
                <Button type="text" icon={<WhatsAppOutlined style={{ fontSize: '28px' }} />}></Button>
              </a>
              <a href='https://about.gitlab.com' target="blank">
                <Button type="text" icon={<GitlabFilled style={{ fontSize: '30px' }} />}></Button>
              </a>
              <a href='https://drive.google.com/drive' target="blank">
                <Button type="text" icon={<FaGoogleDrive style={{ fontSize: '28px' }} />}></Button>
              </a>
            </div>
          </div>
          <div id='conteudos-pj'>
            <div className='content'>
              <div className='conteudos'>
                <h className='titulos-pj'>Cliente:</h><br></br>
                <p className='conteudo-de-titulos'>{prj.attributes.cliente}</p>
              </div>

              <div>
                <h className='titulos-pj'>Integrantes:</h>
                <ul id='ul-pj'>
                  <li>Participante 1</li>
                  <li>Participante 2</li>
                  <li>Participante 3</li>
                  <li>Participante 4</li>
                  <li>Participante 5</li>
                </ul>
              </div>
            </div>
            <div className='content'>
              <div className='conteudos'>
                <h className='titulos-pj'>Descrição:</h>
                <p className='conteudo-de-titulos'>{prj.attributes.descricao}</p>
              </div>

              <Grafico />

            </div>

          </div>
          <div id='position-btnred'>
            <NavLink to="/andamento">
              <button className="btn-red">Andamento</button>
            </NavLink>
          </div>
        </main>

      )}

      {!removerLoader && <Loader />}
      {removerLoader && prj.length === 0 && (
        <div id='conteudo-geral'>
          <div className="clique">
            <h id='titulo-inseri'>No momento você não está inserido em um projeto.</h><br></br>
            <hr id='barra-verde' />
          </div>
        </div>
      )}





    </main>
  )
};
export default Inseri;