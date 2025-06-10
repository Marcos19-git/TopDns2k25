import ImgHeader from "./Images/Hospedagem_01.png";
import Logo03 from "../Images/logo_03.avif";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import Footer from "../Footer/index";
import "./style.css";
import Carrossel from "./carrossel";

function Host() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalBackground, setModalBackground] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDomain(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setModalOpen(false);

    try {
      const response = await axios.get(
        `https://novo.topdns.com.br/whois?domain=${domain}`
      );

      console.log(response.data);

      if (response.data === true) {
        setModalMessage(`INDISPONÍVEL`);
        setModalBackground("bg-red-500");
      } else if (response.data === false) {
        setModalMessage(`DISPONÍVEL`);
        setModalBackground("bg-green-500");
      } else {
        setModalMessage("Resposta inesperada da API.");
        setModalBackground("bg-yellow-500");
      }

      setModalOpen(true);

      setTimeout(() => {
        setModalOpen(false);
      }, 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="overflow-x-hidden">
      <div className="w-full grid relative">
        <img className="imagemm h-[800px] w-full" src={ImgHeader} alt="" />
        <div className="w-full absolute p-[10px] grid justify-center items-center z-10">
          <img className="w-[350px] p-[20px]" src={Logo03} alt="" />
        </div>
        <div className="absolute flex h-full w-full justify-center items-center">
          {/* Aqui, envolva os títulos em uma div com classes responsivas */}
          <div className="grid ">
            {/* Aqui, envolva os títulos em uma div com classes responsivas */}
            <div className="absolute top-[40%] left-[0%] transform -translate-y-1/2 text-white py-2 rounded-md flex flex-col items-center w-full max-w-[100%] px-4">
              <div className="grid">
                <h1 className="registerr2  m-0 text-[#FF7800] scale-y-105 text-center text-[clamp(2em,3.6vw,3.6em)] font-semibold leading-tight">
                  REGISTRO DE DOMÍNIO
                </h1>
                <h2 className="m-0 text-white pb-[30px]  scale-y-125 text-center text-[clamp(0.8em,1.3vw,1.3em)] font-bold leading-tight">
                  REGISTRE SEU DOMÍNIO E GARANTA O ENDEREÇO DO SEU SITE
                </h2>

                {/* Botões permanecem iguais */}
                <div className="flex justify-center pr-[20px]">
                  <a
                    href="https://novo.topdns.com.br/hospedagem"
                    rel="noopener noreferrer"
                  >
                    <button
                      title="HOSPEDAGEM"
                      className=" buttonorange22   font-winner bg-[#FF7800] min-w-[150px] text-[clamp(1em,1.3vw,1.3em)] hover:bg-orange-700 text-white w-[clamp(5em,7vw,7em)] border-r-2 border-r-[#FFA55E]   py-2 px-4"
                    >
                      HOSPEDAGEM
                    </button>
                  </a>
                  <a
                    href="https://novo.topdns.com.br/sms"
                    rel="noopener noreferrer"
                  >
                    <button
                      title="TOPSMS"
                      className=" bg-[#FF7800]    font-winner min-w-[100px] hover:bg-orange-700 text-[clamp(1em,1.3vw,1.3em)] text-white w-[clamp(5em,6vw,6em)] border-r-2 border-r-[#FFA55E]  py-2 px-4"
                    >
                      TOPSMS
                    </button>
                  </a>
                  <a
                    href="https://topdns.com.br/assine"
                    rel="noopener noreferrer"
                  >
                    <button
                      title="ASSINE"
                      className=" bg-[#FF7800]   font-winner hover:bg-orange-700 min-w-[100px] text-[clamp(1em,1.3vw,1.3em)] text-white w-[clamp(5em,7vw,7em)]  py-2 px-4 "
                    >
                      ASSINE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="control22  w-full mt-[-80px]  flex justify-center transition-all duration-200 ease-in-out">
          <div
            className={`divballoon ballondiv z-20 w-[70vw] mt-[-130px] border-2 border-[#FF7800] bg-[#FF7800] transition-all duration-200 ease-in-out rounded-[40px] p-[30px] flex flex-col items-center`}
          >
            <div className="divtitle flex cursor-default w-full justify-center pt-[30px] pb-[20px] text-[clamp(1.7em,2.8vw,2.8em)] text-black transition-all duration-200 ease-in-out">
              <h1 className="items-center ">PESQUISA DE DOMÍNIO</h1>
            </div>
            <div className="divplaceholder flex justify-center ">
              <div className="wwwdiv cursor-default text-white text-[clamp(1rem,1.4vw,1.4em)] w-[clamp(4em,5vw,5em)] flex justify-center items-center text-center rounded-l-[10px] bg-[#62357F]">
                <h2 className="font-bold">WWW</h2>
              </div>
              <form className="flex" onSubmit={handleSubmit}>
                <input
                  className="tam w-[42vw] font-normal placeholder:text-[clamp(1rem,1.5vw,1.5rem)]  placeholder:font-bold placeholder:text-black text-black text-center  h-[50px] outline-none focus:ring-0 rounded-tr-[0.3em] rounded-br-[0.3em]"
                  name="dominio"
                  autoComplete="domain"
                  type="text"
                  id="domain"
                  value={domain}
                  onChange={handleInputChange}
                  placeholder="SEU DOMÍNIO"
                />

                <div className="orangediv flex ml-[20px] ">
                  <button
                    type="submit"
                    id="MyButton"
                    className="testediv w-[clamp(5em,8vw,8em)] bg-[#62357F]  text-white text-[clamp(1rem,1.4vw,1.4em)] font-bold rounded-[0.3em]"
                  >
                    TESTAR
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full mt-[5px] flex justify-center">
              {(loading || modalOpen) && (
                <div
                  className={`rounded-lg text-center text-xl ${
                    loading ? "bg-gray-400" : modalBackground
                  }`}
                >
                  <p className="p-[10px] pr-[50px] pl-[50px] text-white">
                    {loading ? "CARREGANDO..." : modalMessage}
                  </p>
                </div>
              )}
            </div>

            <div
              className={`divminiballoon flex w-full justify-center transition-all duration-200 ease-in-out ${
                loading || modalOpen ? "mt-[5px]" : "mt-[20px]"
              }`}
            >
              <div className="ei2s2 w-[57vw]  border-[3px] border-[#D5DDDF] bg-[#e8eaec] cursor-default pl-[60px] pr-[40px] pt-[20px] pb-[20px]  gap-[40px] flex rounded-[28px] transition-all duration-200 ease-in-out">
                <div className="  whitespace-nowrap text-[clamp(0.8rem,0.8vw,0.8em)] ">
                  ㅤ Conheça os domíniosㅤ
                  <br className="hidden md:block" />ㅤ mais utilizados:
                </div>
                <div className="e2d3d cursor-default w-full flex-wrap text-[clamp(0.8rem,1.2vw,1em)] text-[#383E42] font-bold flex items-center justify-evenly transition-all duration-200 ease-in-out">
                  <span>.com.br</span>
                  <span>.com</span>
                  <span>.net</span>
                  <span>.online</span>
                  <span>.site</span>
                  <span>.org</span>
                  <span>.store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden">
        <Carrossel />
      </div>
      <div className="hidden w-full h-full lg:flex justify-center items-center p-[90px] pb-[120px]">
        <div className="eid2 w-[70vw]  border-b-[px] border-t-[3px] border-l-[4px] border-r-[4px]  border-[#FF7800] rounded-[50px] rounded-br-[54px] rounded-bl-[54px] hidden lg:flex flex-wrap">
          <div className="w-full  hidden lg:flex bg-[#62357F]   rounded-[50px] ">
            <div className="basic3 p-2  text-center h-[110px] bg-[#62357F] hidden lg:flex justify-center w-[19.7vw] items-center rounded-bl-[44px] border-[#FF7800] border-b-[3px] rounded-tl-[46px] text-gray-800 font-semibold">
              <h2 className=" text-white  text-[clamp(0.6rem,1.2vw,1.2em)]  ">
                CONFIRA AS FERRAMENTAS <br></br>E VANTAGENS DOS PLANOS.
              </h2>
            </div>
            <div className="border-b-[3px] border-[#FF7800]">
              <div className="basic2 p-2 w-[9.8vw] h-full rounded-tl-[50px] hidden lg:flex  justify-center items-center rounded-bl-[50px] text-center  bg-[#FF7800] text-gray-800 ">
                <div className="grid">
                  <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                    TOP
                  </h1>
                  <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                    BÁSICO
                  </h2>
                </div>
              </div>
            </div>
            <div className="basic2 border-l-[2px] border-[#FFA55E] p-2 w-[10vw] text-center bg-[#FF7800] hidden lg:flex justify-center  items-center text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                  TOP
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  BÁSICO
                </h2>
              </div>
            </div>
            <div className="basic2 border-l-[2px] p-2 w-[10vw] border-[#FFA55E]   text-center bg-[#FF7800] hidden  lg:flex justify-center items-center text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                  TOP
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  BÁSICO
                </h2>
              </div>
            </div>
            <div className="basic2 border-l-[2px] border-[#FFA55E]  p-2 w-[10.1vw] text-center bg-[#FF7800] hidden  lg:flex justify-center items-center text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                  TOP
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  BÁSICO
                </h2>
              </div>
            </div>
            <div className="grid">
              <div className="basic2 border-l-[2px] border-[#FFA55E]  p-2 w-[10vw] text-center  bg-[#FF7800] hidden lg:flex justify-center items-center rounded-tr-[44px] rounded-br-[46px] text-gray-800 ">
                <div className="grid">
                  <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                    TOP
                  </h1>
                  <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                    BÁSICO
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100vw] md:w-full hidden lg:flex">
            <div className="border-r border-b text-[clamp(0.6rem,1.3vw,1rem)] p-2 pt-[20px] text-center w-[40vw]  text-black font-semibold">
              ESPAÇO EM DISCO
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center pt-[20px] w-[20vw]   text-[#8F8F90] font-semibold">
              10GB
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center pt-[20px] w-[20vw]  text-[#8F8F90] font-semibold">
              10GB
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center pt-[20px] w-[20vw]  text-[#8F8F90] font-semibold">
              10GB
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center pt-[20px] w-[20vw]  text-[#8F8F90] font-semibold">
              10GB
            </div>
            <div className="border-l border-b text-[clamp(0.6rem,1.3vw,1rem)] p-2 pt-[20px] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              10GB
            </div>
          </div>
          <div className="w-[100vw] md:w-full hidden lg:flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-black font-semibold">
              TRÁFEGO MENSAL
            </div>
            <div className="border p-2  text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              50GB
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              50GB
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[20vw]  text-[#8F8F90] font-semibold">
              50GB
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              50GB
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              50GB
            </div>
          </div>
          <div className="w-[100vw] md:w-full hidden lg:flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-black font-semibold">
              BANCO DE DADOS
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              1
            </div>
            <div className="border p-2  text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              1
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              1
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              1
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              1
            </div>
          </div>
          <div className="w-[100vw] md:w-full flex">
            <div className="border p-2 whitespace-nowrap text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-black font-semibold">
              CONTAS DE E-MAIL
            </div>
            <div className="border p-2  text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              DISPONIVEL
            </div>
          </div>
          <div className="w-[100vw] md:w-full flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw] text-black font-semibold">
              DOMÍNIOS
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              10
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              10
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              10
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              10
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[20vw]  text-[#8F8F90] font-semibold">
              10
            </div>
          </div>
          <div className="w-[100vw] md:w-full flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-black font-semibold">
              SERVIDOR
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              MANUAL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              MANUAL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              MANUAL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              MANUAL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              MANUAL
            </div>
          </div>
          <div className="w-[100vw] md:w-full hidden lg:flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-black font-semibold">
              ANTI-VÍRUS
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              99,9%
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              99,9%
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[20vw]  text-[#8F8F90] font-semibold">
              99,9%
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              99,9%
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              99,9%
            </div>
          </div>
          <div className="w-full hidden lg:flex">
            <div className="border-t border-r p-2 text-[clamp(0.6rem,1.3vw,1rem)] pb-[20px] text-center w-[40vw] text-black font-semibold">
              NÃO DISPONÍVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center pb-[20px] w-[20vw]  text-[#8F8F90] font-semibold">
              -
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center pb-[20px] w-[20vw]  text-[#8F8F90] font-semibold">
              -
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center pb-[20px] w-[20vw]  text-[#8F8F90] font-semibold">
              -
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center pb-[20px] w-[20vw]  text-[#8F8F90] font-semibold">
              -
            </div>
            <div className="border-t border-l p-2 text-[clamp(0.6rem,1.3vw,1rem)] pb-[20px] text-center w-[20vw]  text-[#8F8F90] font-semibold">
              -
            </div>
          </div>
          <div className="w-full hidden lg:flex bg-[#42145F] rounded-[50px] h-[140px] border-[3px] border-orange-500">
            <div className=" p-2 b text-center bg-[#42145F]  rounded-tl-[48px] w-[30vw] hidden lg:flex  justify-center items-center rounded-bl-[44px]  text-gray-800 font-semibold">
              <h1 className="text-white hidden lg:flex text-[clamp(1.5rem,2.8vw,2.8rem)]">
                VALORES
              </h1>
            </div>
            <div className=" border-orange-500 border-t-[2px] border-l-[4px] border-b-[2px]   hidden lg:flex  p-3 text-center bg-[#59186F]  rounded-l-[40px]   justify-center items-center  text-gray-800 w-[15.3vw]">
              <h1 className="text-white font-ArabotoBlack translate-x-[4px] mt-[10px] tracking-[-8px] text-[clamp(1.5rem,5vw,5rem)] ">
                19
              </h1>
              <div className="grid">
                <div className="text-white h-[24px] font-ArabotoBlack mt-[10px] text-[1.5em]  ml-[12px] flex items-start">
                  <span className="translate-x-[3px] font-ArabotoBlack">,</span>
                  <span className="font-ArabotoBlack">90</span>
                </div>
                <h2 className="text-white ml-[8px] font-ArabotoBlack mt-[2px] translate-x-[3px]">
                  Mês
                </h2>
              </div>
            </div>
            <div className="border-l-[2px] border-t-[2px] border-t-orange-500 border-b-[2px] border-b-orange-500  border-[#9976A2] hidden lg:flex p-2 text-center bg-[#59186F]  justify-center items-center  text-gray-800  w-[15.3vw]">
              <h1 className="text-[#FF7800] font-ArabotoBlack translate-x-[4px] mt-[10px] tracking-[-8px] text-[clamp(1.5rem,5vw,5rem)] ">
                19
              </h1>
              <div className="grid">
                <div className="text-[#FF7800] h-[24px] mt-[10px] font-ArabotoBlack text-[1.5em]  ml-[12px] flex items-start">
                  <span className="translate-x-[3px] font-ArabotoBlack">,</span>
                  <span className="font-ArabotoBlack">90</span>
                </div>
                <h2 className="text-[#FF7800] ml-[8px] font-ArabotoBlack mt-[2px] translate-x-[3px]">
                  Mês
                </h2>
              </div>
            </div>
            <div className="border-l-[2px] border-t-[2px] border-t-orange-500 border-b-[2px] border-b-orange-500 border-[#9976A2] hidden lg:flex p-2 text-center bg-[#59186F] [160px] justify-center items-center  text-gray-800  w-[15.3vw]">
              <h1 className="text-white translate-x-[4px] mt-[10px] font-ArabotoBlack tracking-[-8px] text-[clamp(1.5rem,5vw,5rem)] ">
                19
              </h1>
              <div className="grid">
                <div className="text-white h-[24px] mt-[10px] font-ArabotoBlack text-[1.5em]  ml-[12px] flex items-start">
                  <span className="translate-x-[3px] font-ArabotoBlack">,</span>
                  <span className="font-ArabotoBlack">90</span>
                </div>
                <h2 className="text-white ml-[8px] font-ArabotoBlack mt-[2px] translate-x-[3px]">
                  Mês
                </h2>
              </div>
            </div>
            <div className="border-l-[2px] border-t-[2px] border-t-orange-500 border-b-[2px] border-b-orange-500 border-[#9976A2] hidden lg:flex p-2 text-center bg-[#59186F]  justify-center items-center  text-gray-800  w-[15.3vw]">
              <h1 className="text-[#FF7800] font-ArabotoBlack  mt-[10px] translate-x-[4px] tracking-[-8px] text-[clamp(1.5rem,5vw,5rem)] ">
                19
              </h1>
              <div className="grid">
                <div className="text-[#FF7800] mt-[10px] h-[24px] font-ArabotoBlack text-[1.5em]  ml-[12px] flex items-start">
                  <span className="translate-x-[3px] font-ArabotoBlack">,</span>
                  <span className="font-ArabotoBlack">90</span>
                </div>
                <h2 className="text-[#FF7800] ml-[8px] font-ArabotoBlack mt-[2px] translate-x-[3px]">
                  Mês
                </h2>
              </div>
            </div>
            <div className="border-l-[2px] border-t-[2px] border-t-orange-500 border-b-[2px] border-b-orange-500 border-[#9976A2] hidden lg:flex p-2 text-center bg-[#59186F]  [160px] rounded-tr-[50px] justify-center items-center  rounded-br-[48px] text-gray-800  w-[15.3vw]">
              <h1 className="text-white font-ArabotoBlack mt-[10px] tracking-[-8px] text-[clamp(1.5rem,5vw,5rem)] ">
                19
              </h1>
              <div className="grid">
                <div className="text-white h-[24px] mt-[10px] font-ArabotoBlack text-[1.5em]  ml-[6px] flex items-start">
                  <span className="translate-x-[3px] font-ArabotoBlack">,</span>
                  <span className="font-ArabotoBlack">90</span>
                </div>
                <h2 className="text-white ml-[8px] font-ArabotoBlack mt-[2px] translate-x-[2px]">
                  Mês
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Host;
