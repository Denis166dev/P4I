import { NavLink } from 'react-router-dom';
import '../../../css/arquivados.css'
import Barrafiltro from '../../../components/Barrafiltro';


const ProjetosArquivados = () => {

  return (

    <main className='main-transparent'>
      <div>
        <Barrafiltro />
      </div>

      <div className='conteudo-arquivados'>
        <div className='nav-arqv'>
          <NavLink to='/vilarquivo'>
            <button className='btn-arquivados'>
              <h>P1</h>
            </button>
          </NavLink>
        </div>

        <div className='nav-arqv'>
          <NavLink to='/vilarquivo'>
            <button className='btn-arquivados'>
              <h>P2</h>
            </button>
          </NavLink>
        </div>

        <div className='nav-arqv'>
          <NavLink to='/vilarquivo'>
            <button className='btn-arquivados'>
              <h>P3</h>
            </button>
          </NavLink>
        </div>


        <div className='nav-arqv'>
          <NavLink to='/vilarquivo'>
            <button className='btn-arquivados'>
              <h>P4</h>
            </button>
          </NavLink>
        </div>

        <div className='nav-arqv'>
          <NavLink to='/vilarquivo'>
            <button className='btn-arquivados'>
              <h>P5</h>
            </button>
          </NavLink>
        </div>

        <div className='nav-arqv'>
          <NavLink to='/vilarquivo'>
            <button className='btn-arquivados'>
              <h>P6</h>
            </button>
          </NavLink>
        </div>
      </div>
    </main>

  );
};

export default ProjetosArquivados;