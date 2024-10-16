import { FaKey } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Input } from "antd";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";

const Login = () => {
  const containerStyle = {
    backgroundColor: "#085C16",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: '-8px -8px', // Remova qualquer margem
    padding: 0, // Remova qualquer preenchimento
  };

  const innerContainerStyle = {
    backgroundColor: "#e4e4e4",
    width: "60%",
    padding: "24px",
    borderRadius: "30px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        <img src={logo} alt="logo" style={{ height: 140 }} />
        <h1 style={{ color: "black", fontFamily: "Arial" }}>
          Bem vindo ao P4I
        </h1>
        <h3 style={{ color: "black", fontFamily: "Arial" }}>
          Projeto Integrador do curso Integrado de Informática do IFPB
        </h3>
        <h4 style={{ color: "black", textAlign: "left", fontFamily: "Arial" }}>
          Usuário:
        </h4>
        <div style={{ display: "flex" }}>
          <BsFillPersonFill style={{ marginRight: 15, fontSize: "30px" }} />
          <Input
            placeholder="Email"
            style={{ marginBottom: "20px", borderRadius: "50px" }}
          />
        </div>
        <h4 style={{ color: "black", textAlign: "left", fontFamily: "Arial" }}>
          Senha:
        </h4>
        <div style={{ display: "flex" }}>
          <FaKey style={{ marginRight: 10, fontSize: "25px" }} />
          <Input.Password
            placeholder="Senha"
            style={{ marginBottom: "16px", borderRadius: "50px" }}
          />
        </div>
        <NavLink to="/projeto">
          <button className="btn-acessar">Acessar</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;