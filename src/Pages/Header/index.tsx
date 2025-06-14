import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
//import Header1 from "../Images/Header.avif";
import Topo1 from "../Images/topo_01.avif";
import Logo from "../Images/logo_03.avif";

interface Headers {
  id: number;
  texto: string;
  created_at: string;
  updated_at: string;
}

function Header() {
  const [header, setPortfolio] = useState<{
    nome1: { texto: string };
  }>({
    nome1: { texto: "" },
  });

  useEffect(() => {
    axios
      .get<Headers[]>("https://novo.topdns.com.br/header")
      .then((response) => {
        const data = response.data;

        setPortfolio({
          nome1: data.find((c) => c.id === 1) || {
            texto: "",
          },
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar os contatos:", error);
      });
  }, []);

  return (
    <section>
      <div className="w-full relative overflow-hidden">
        <div className="absolute w-[100vw]">
          <img className="w-[100vw] h-[200px]" src={Topo1} alt=""></img>
          <div className="divtop w-[100vw] absolute mt-[-160px] flex  justify-center">
            <a href="https://novo.topdns.com.br/">
              {/*Substituir depois */}
              <img
                className="topdns w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-auto transition-all duration-300 ease-in-out"
                src={Logo}
              ></img>
            </a>
          </div>
        </div>

        <img
          className="imgdivw w-full h-auto"
          src={header.nome1.texto}
          style={{ maxWidth: "100%", maxHeight: "auto" }}
        />
        <div className="divorange absolute top-[65%] left-[24%] transform -translate-y-1/2  text-white  py-2 rounded-md flex ">
          <a href="https://novo.topdns.com.br/hospedagem">
            <button
              title="HOSPEDAGEM"
              className="buttonorange font-winner  buttonorange22  bg-[#FF7900] min-w-[80px] text-[clamp(0.3em,1.5vw,1.5em)]  hover:bg-orange-700 text-white w-[clamp(5em,10vw,9.75em)]  border-r-2 border-r-[#FFA55E]  py-2 px-4    "
            >
              HOSPEDAGEM
            </button>
          </a>
          <a href="https://novo.topdns.com.br/sms">
            <button
              title="TOPSMS"
              className="buttonorange font-winner bg-[#FF7900] min-w-[60px] hover:bg-orange-700 text-[clamp(0.3em,1.5vw,1.5em)]  text-white w-[clamp(5em,10vw,8.75em)] border-r-2 border-r-[#FFA55E] py-2 px-4 "
            >
              TOPSMS
            </button>
          </a>
          <a href="https://topdns.com.br/assine">
            <button
              title="ASSINE"
              className="buttonorange font-winner bg-[#FF7900] hover:bg-orange-700  min-w-[60px] text-[clamp(0.3em,1.5vw,1.5em)] text-white w-[clamp(5em,10vw,8.75em)]   py-2 px-4  "
            >
              ASSINE
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
