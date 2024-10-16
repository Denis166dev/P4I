import { NavLink } from 'react-router-dom';
import '../../../css/home.css'


const Vilarquivo = () => {
  return (
    <main className='main-transparent'>
      <main className='main-white'>

        <div id='header'>
          <div><h1>P1</h1></div>
          <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
            <h1>Edição: 2023</h1>
          </div>
        </div>

        <div id='conteudos-pj'>
          <div className='content'>
            <div className='conteudos'>
              <h className='titulos-pj'>Cliente:</h><br></br>
              <p className='conteudo-de-titulos'>Nome completo do cliente</p>
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
              <p className='conteudo-de-titulos'>Descrição geral do projeto</p>
            </div>

          </div>

        </div>

        <div id='position-btnred'>
          <NavLink to="/projetosarquivados">
            <button className="btn-red">Fechar</button>
          </NavLink>
        </div>
      </main>
    </main>
  );
};

export default Vilarquivo;