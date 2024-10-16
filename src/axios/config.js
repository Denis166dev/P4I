import axios from "axios";

const conexaoApi = axios.create({
  baseURL: "https://backend-p4i.josarthur2.repl.co/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default conexaoApi;