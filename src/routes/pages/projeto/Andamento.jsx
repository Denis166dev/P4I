import '../../../css/home.css';
import '../../../css/andamento.css';
import { LuClipboardSignature } from 'react-icons/lu';
import { ImBubbles2 } from 'react-icons/im';
import { NavLink } from 'react-router-dom';


const Andamento = () => {
  return (
    <main className='main-transparent'>

      <div id='space-btns'>
        <div className='btns-andamento'>
          <NavLink to='/atividades'>
            <button id='btn-at'>
              <LuClipboardSignature size={50} /><br></br>
              <h className='titulos-btn-andamento'>Atividades</h>
            </button>
          </NavLink>

        </div>

        <div className='btns-andamento'>
          <NavLink to='/reunioes'>
            <button id='btn-rn'>
              <ImBubbles2 size={50} /><br></br>
              <h className='titulos-btn-andamento'>Reunião</h>
            </button>
          </NavLink>
        </div>
      </div>

    </main>
  );
};

export default Andamento;