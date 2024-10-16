import { useState } from "react";
import '../../../css/cadastroreu.css'
import '../../../css/home.css'
import { useNavigate } from "react-router-dom";
import conexaoApi from "../../../axios/config";

const Cadastroreuniao = () => {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [data_realizacao, setData] = useState("");
  const [participantes, setParticipantes] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [ata, setAta] = useState("");

  function mudaEstado(event, setState) {
    const novoValor = event.target.value;
    setState(novoValor);
  }

  const cadastrarReuniao = async (event) => {
    event.preventDefault();

    const reuniao = { titulo, data_realizacao, participantes, objetivo, ata };
    console.log(reuniao);

    await conexaoApi.post("/reuniaos", { data: reuniao });
    navigate("/reunioes", { state: { message: "Projeto cadastrado com sucesso." } })

  }

  return (

    <main className="main-transparent">
      <form id='form' onSubmit={(e) => cadastrarReuniao(e)}>
        <div className='conteudo-form'><h className='titulos'>Título:</h>
          <input className='inputcadastro' value={titulo} onChange={(event) => mudaEstado(event, setTitulo)} id='titulo' placeholder='Dê um título a sua reunião' required /></div>

        <div className='conteudo-form'><h className='titulos'>Data:</h>
          <input className='inputcadastro' value={data_realizacao} onChange={(event) => mudaEstado(event, setData)} id='data' type='date' required /></div>

        <div className='conteudo-form'><h className='titulos'>Participantes:</h>
          <input className='inputcadastro' value={participantes} onChange={(event) => mudaEstado(event, setParticipantes)} id='participantes' placeholder='Informe os participantes' required /></div>

        <div className='conteudo-form'><h className='titulos'>Objetivo:</h>
          <textarea className='inputcadastro' value={objetivo} onChange={(event) => mudaEstado(event, setObjetivo)} id="objetivo" name="objetivo" placeholder='Descreva o objetivo da reunião realizada' style={{ width: '300px', height: '30px', font: 'Arial' }} required></textarea></div>

        <div className='conteudo-form'><h className='titulos'>Ata:</h>
          <textarea className='inputcadastro' value={ata} onChange={(event) => mudaEstado(event, setAta)} id='ata' required></textarea></div>
        <div id='button-position-form'><button className="btn-cadastrar-reu">Cadastrar</button></div>
      </form>

    </main>

  );
};

export default Cadastroreuniao;