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
    <div className="w-full h-[100vh] overflow-x-hidden">
      <div className="w-full grid relative">
        <img className="imagemm h-[800px] w-full" src={ImgHeader} alt="" />
        <div className="w-full absolute p-[10px] grid justify-center items-center z-10">
          <img className="w-[350px] p-[20px]" src={Logo03} alt="" />
        </div>
        <div className="absolute flex h-full w-full justify-center items-center">
          {/* Aqui, envolva os títulos em uma div com classes responsivas */}
          <div className="grid">
            {/* Aqui, envolva os títulos em uma div com classes responsivas */}
            <div className="absolute top-[40%] left-[5%] transform -translate-y-1/2 text-white py-2 rounded-md flex flex-col items-center w-full max-w-[90%] px-4">
              <h1 className=" text-orange-500 text-center p-10 text-[clamp(2em,3.2vw,3.2em)] font-bold ">
                SMS EM GRANDES QUANTIDADES
              </h1>

              {/* Botões permanecem iguais */}
              <div className="flex justify-center  w-full">
                <a
                  href="https://novo.topdns.com.br/hospedagem"
                  rel="noopener noreferrer"
                >
                  <button
                    title="HOSPEDAGEM"
                    className=" buttonorange22 bg-[#ff8400] min-w-[150px] text-[clamp(1em,1.3vw,1.3em)] hover:bg-orange-700 text-white w-[clamp(5em,10vw,9.75em)] border-r-2 border-white font-bold py-2 px-4"
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
                    className=" bg-[#ff8400] min-w-[120px] hover:bg-orange-700 text-[clamp(1em,1.3vw,1.3em)] text-white w-[clamp(5em,10vw,8.75em)] border-r-2 border-white font-bold py-2 px-4"
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
                    className=" bg-[#ff8400] hover:bg-orange-700 min-w-[120px] text-[clamp(1em,1.3vw,1.3em)] text-white w-[clamp(5em,10vw,8.75em)] font-bold py-2 px-4"
                  >
                    ASSINE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="control22  w-full mt-[-80px]  flex justify-center transition-all duration-200 ease-in-out">
          <div
            className={`divballoon ballondiv z-20 w-[850px] ${
              loading || modalOpen ? "h-[290px]" : "h-[260px]"
            } mt-[-130px] border-2 border-[#ff8400] bg-[#ff8623] transition-all duration-200 ease-in-out rounded-[40px]`}
          >
            <div className="divtitle flex cursor-default justify-center pt-[30px] pb-[20px] text-[clamp(1.7em,2vw,1.975em)] text-black transition-all duration-200 ease-in-out">
              <h1 className="items-center text-center">PESQUISA DE DOMÍNIO</h1>
            </div>
            <div className="divplaceholder flex justify-center ">
              <div className="wwwdiv cursor-default flex text-white text-[20px] text-center rounded-l-[10px] items-center bg-purple-900 pr-[10px] pl-[10px]">
                <h2 className="font-bold">WWW.</h2>
              </div>
              <form className="flex" onSubmit={handleSubmit}>
                <input
                  className="tam w-[500px] font-normal placeholder:font-bold placeholder:text-black text-black text-center  h-[50px] outline-none focus:ring-0 rounded-tr-[0.3em] rounded-br-[0.3em]"
                  name="dominio"
                  autoComplete="domain"
                  type="text"
                  id="domain"
                  value={domain}
                  onChange={handleInputChange}
                  placeholder="SEU DOMÍNIO"
                />

                <div className="orangediv flex ">
                  <button
                    type="submit"
                    id="MyButton"
                    className="testediv  bg-purple-900 pl-[10px] pr-[10px] text-white text-[20px] font-bold rounded-[0.3em]"
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
                  <p className="p-[10px] pr-[10px] pl-[10px] text-white">
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
              <div className=" contedballon ballonconted bg-[#e8eaec] cursor-default pl-[30px] pr-[30px] pt-[10px] pb-[10px]  gap-[40px] flex rounded-[15px] transition-all duration-200 ease-in-out">
                <div className="wrap22 font-bold pr-[10px]">
                  ㅤ Conheça os domíniosㅤ
                  <br className="hidden md:block" />ㅤ mais utilizados:
                </div>
                <div className="mititle cursor-default gap-[14px] flex items-center transition-all duration-200 ease-in-out ">
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
        <div className="eid2 w-[70vw]  border-[3px]  border-orange-400 rounded-[50px] rounded-br-[54px] rounded-bl-[54px] hidden lg:flex flex-wrap">
          <div className="w-full  hidden lg:flex bg-purple-900 border-orange-400 border-b-[3px] rounded-[50px] ">
            <div className="basic3 p-2  text-center h-[13vh] bg-purple-900 hidden lg:flex justify-center w-[20vw] items-center rounded-bl-[50px] border-orange-400 rounded-tl-[48px] text-gray-800 font-semibold">
              <h2 className=" text-white  text-[clamp(0.6rem,1vw,1em)]  ">
                CONFIRA AS FERRAMENTAS <br></br>E VANTAGENS DOS PLANOS
              </h2>
            </div>
            <div className="basic2 p-2 w-[10vw]  rounded-tl-[50px] hidden lg:flex border-orange-400 justify-center items-center rounded-bl-[50px] text-center  bg-orange-400 text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                  TOP
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  BASICO
                </h2>
              </div>
            </div>
            <div className="basic2 border-l p-2 w-[10vw] text-center bg-orange-400 hidden lg:flex justify-center  items-center text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                  TOP
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  BASICO
                </h2>
              </div>
            </div>
            <div className="basic2 border-l p-2 w-[10vw]  text-center bg-orange-400 hidden  lg:flex justify-center items-center text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                  TOP
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  BASICO
                </h2>
              </div>
            </div>
            <div className="basic2 border-l p-2 w-[10vw] text-center bg-orange-400 hidden  lg:flex justify-center items-center text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                  TOP
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  BASICO
                </h2>
              </div>
            </div>
            <div className="grid">
              <div className="basic2 border-l p-2 w-[10vw] text-center  bg-orange-400 hidden lg:flex justify-center items-center rounded-tr-[48px] rounded-br-[50px] text-gray-800 ">
                <div className="grid">
                  <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                    TOP
                  </h1>
                  <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                    BASICO
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100vw] md:w-full hidden lg:flex">
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center w-[40vw]  text-black font-semibold">
              ESPAÇO EM DISCO
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center w-[20vw]   text-gray-400 font-semibold">
              10GB
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center w-[20vw]  text-gray-400 font-semibold">
              10GB
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center w-[20vw]  text-gray-400 font-semibold">
              10GB
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center w-[20vw]  text-gray-400 font-semibold">
              10GB
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center w-[20vw]  text-gray-400 font-semibold">
              10GB
            </div>
          </div>
          <div className="w-[100vw] md:w-full hidden lg:flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-black font-semibold">
              TRÁFEGO MENSAL
            </div>
            <div className="border p-2  text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              50GB
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              50GB
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[20vw]  text-gray-400 font-semibold">
              50GB
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              50GB
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              50GB
            </div>
          </div>
          <div className="w-[100vw] md:w-full hidden lg:flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-black font-semibold">
              BANCO DE DADOS
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              1
            </div>
            <div className="border p-2  text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              1
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              1
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              1
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              1
            </div>
          </div>
          <div className="w-[100vw] md:w-full flex">
            <div className="border p-2 whitespace-nowrap text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-black font-semibold">
              CONTAS DE E-MAIL
            </div>
            <div className="border p-2  text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              DISPONIVEL
            </div>
          </div>
          <div className="w-[100vw] md:w-full flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw] text-black font-semibold">
              DOMINIOS
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              10
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              10
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              10
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              10
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[20vw]  text-gray-400 font-semibold">
              10
            </div>
          </div>
          <div className="w-[100vw] md:w-full flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-black font-semibold">
              SERVIDOR
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              MANUAL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              MANUAL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              MANUAL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              MANUAL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              MANUAL
            </div>
          </div>
          <div className="w-[100vw] md:w-full hidden lg:flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-black font-semibold">
              ANTIVIRUS
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              99,9%
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              99,9%
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[20vw]  text-gray-400 font-semibold">
              99,9%
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              99,9%
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              99,9%
            </div>
          </div>
          <div className="w-full hidden lg:flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw] text-black font-semibold">
              NAO DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              -
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              -
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              -
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              -
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-400 font-semibold">
              -
            </div>
          </div>
          <div className="w-full hidden lg:flex bg-purple-950 rounded-[50px] h-[140px] border-2 border-orange-500">
            <div className="border-l p-2 text-center bg-purple-950  rounded-tl-[50px] w-[30vw] hidden lg:flex  justify-center items-center rounded-bl-[48px]  text-gray-800 font-semibold">
              <h1 className="text-white hidden lg:flex text-[clamp(1.5rem,2.8vw,2.8rem)]">
                VALORES
              </h1>
            </div>
            <div className=" border-orange-500 border-l-[4px] hidden lg:flex  p-3 text-center bg-purple-900 w-[15vw] rounded-tl-[50px]  rounded-bl-[50px] justify-center items-center  text-gray-800 ">
              <h1 className="text-white text-[clamp(1.5rem,5vw,5rem)] font-bold">
                19
              </h1>
              <h2 className="text-white">,</h2>
              <div className="grid ">
                <h2 className="text-white h-[24px] text-[1.5em] ml-[-5px] font-bold">
                  90
                </h2>
                <h2 className="text-white">Mês</h2>
              </div>
            </div>
            <div className="border-l  hidden lg:flex p-2 text-center bg-purple-900 w-[15vw] justify-center items-center  text-gray-800 font-semibold">
              <h1 className="text-orange-500 text-[clamp(1.5rem,5vw,5rem)] font-bold">
                19
              </h1>
              <h2 className="text-orange-500">,</h2>
              <div className="grid ">
                <h2 className="text-orange-500 h-[24px] text-[1.5em] ml-[-5px] font-bold">
                  90
                </h2>
                <h2 className="text-orange-500">Mês</h2>
              </div>
            </div>
            <div className="border-l hidden lg:flex p-2 text-center bg-purple-900 w-[15vw] justify-center items-center  text-gray-800 font-semibold">
              <h1 className="text-white text-[clamp(1.5rem,5vw,5rem)] font-bold">
                19
              </h1>
              <h2 className="text-white">,</h2>
              <div className="grid ">
                <h2 className="text-white h-[24px] text-[1.5em] ml-[-5px] font-bold">
                  90
                </h2>
                <h2 className="text-white">Mês</h2>
              </div>
            </div>
            <div className="border-l hidden lg:flex p-2 text-center bg-purple-900 w-[15vw] justify-center items-center  text-gray-800 font-semibold">
              <h1 className="text-orange-500 text-[clamp(1.5rem,5vw,5rem)] font-bold">
                19
              </h1>
              <h2 className="text-orange-500">,</h2>
              <div className="grid ">
                <h2 className="text-orange-500 h-[24px] text-[1.5em] ml-[-5px] font-bold">
                  90
                </h2>
                <h2 className="text-orange-500">Mês</h2>
              </div>
            </div>
            <div className="border-l hidden lg:flex p-2 text-center bg-purple-900  w-[15vw] rounded-tr-[50px] justify-center items-center  rounded-br-[48px] text-gray-800 font-semibold">
              <h1 className="text-white text-[clamp(1.5rem,5vw,5rem)] font-bold">
                19
              </h1>
              <h2 className="text-white">,</h2>
              <div className="grid ">
                <h2 className="text-white h-[24px] text-[1.5em] ml-[-5px] font-bold">
                  90
                </h2>
                <h2 className="text-white">Mês</h2>
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
