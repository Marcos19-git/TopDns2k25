import ImgHeader from "../Hosting/Images/Hospedagem_01.png";
import Logo03 from "../Images/logo_03.avif";

import "./style.css";
import "../Hosting/style.css";
import Carrossel2 from "./carrossel2";
import Footer from "../Footer/index";
function Sms() {
  return (
    <div className="overflow-x-hidden">
      <div className="w-full grid relative">
        <img className=" h-[850px] w-full" src={ImgHeader} alt="" />
        <div className="w-full absolute p-[10px] grid justify-center items-center z-10">
          <img className="w-[350px] p-[20px]" src={Logo03} alt="" />
        </div>
        <div className="absolute flex h-full w-full justify-center items-center">
          <div className="grid">
            {/* Aqui, envolva os títulos em uma div com classes responsivas */}
            <div className="absolute top-[40%] left-[5%] transform -translate-y-1/2 text-white py-2 rounded-md flex flex-col items-center w-full max-w-[90%] px-4">
              <h1 className=" text-[#FF7800] font-ArabotoMedium text-center p-10 pb-[50px] text-[clamp(2em,3.2vw,3.2em)]   ">
                SMS EM GRANDES QUANTIDADES
              </h1>

              {/* Botões permanecem iguais */}
              <div className="flex justify-center pr-[20px]">
                <a
                  href="https://novo.topdns.com.br/hospedagem"
                  rel="noopener noreferrer"
                >
                  <button
                    title="HOSPEDAGEM"
                    className=" buttonorange22   font-winner bg-[#FF7900] min-w-[150px] text-[clamp(1em,1.3vw,1.3em)] hover:bg-orange-700 text-white w-[clamp(5em,7vw,7em)] border-r-2 border-r-[#FFA55E]  py-2 px-4"
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
                    className=" bg-[#FF7900]    font-winner min-w-[100px] hover:bg-orange-700 text-[clamp(1em,1.3vw,1.3em)] text-white w-[clamp(5em,6vw,6em)] border-r-2 border-r-[#FFA55E]  py-2 px-4"
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
                    className=" bg-[#FF7900]   font-winner hover:bg-orange-700 min-w-[100px] text-[clamp(1em,1.3vw,1.3em)] text-white w-[clamp(5em,7vw,7em)]  py-2 px-4 "
                  >
                    ASSINE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="control22  w-full mt-[-180px]  flex justify-center transition-all duration-200 ease-in-out">
          <div
            className=" z-20 lg:w-[65vw] w-[100vw] 
              h-full
             border-2 border-[#FF7800] p-8 bg-[#FF7800] transition-all duration-200 ease-in-out rounded-[40px]"
          >
            <h1 className="items-center text-[#6F3282] text-[2.5em] text-center">
              CONHEÇA O TOPSMS
            </h1>
            <h2 className="w-full text-center pl-[55px] pr-[55px] text-white  text-[1.3em] pt-[20px]">
              Uma plataforma de envio de mensagem via SMS ( sigla de Short
              Message Service, que em português significa Serviço de Mensagens
              Curtas ).
            </h2>
            <h2 className="w-full text-center text-white pl-[20px] pr-[20px] text-[1.3em] pt-[0px] pb-[10px]">
              Uma ferramenta desenvolvida para quem quer e precisa de facilidade
              e praticidade. Melhora, de forma eficiente e dinâmica, a
              comunicação com seus clientes.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden">
        <Carrossel2 />
      </div>
      <div className="hidden w-full h-full lg:flex justify-center items-center p-[90px] pb-[120px]">
        <div className="eid2 w-[65vw]   border-t-[3px] border-l-[4px] border-r-[4px]  border-[#FF7800] rounded-[50px] rounded-br-[54px] rounded-bl-[54px] hidden lg:flex flex-wrap">
          <div className="flex w-full bg-[#FF7800] rounded-tr-[40px] rounded-tl-[40px] rounded-br-[40px] rounded-bl-[40px]">
            <div className="basic2 p-[1.4em] w-[16.1vw] rounded-tl-[44px] hidden lg:flex justify-center items-center rounded-bl-[50px] text-center  bg-[#FF7800] text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1vw,1em)] h-[15px] ">
                  TOP BASIC
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  300 SMS
                </h2>
              </div>
            </div>
            <div className="basic2 border-l p-2 w-[16.1vw] text-center border-l-[#FFA55E] bg-[#FF7800] hidden lg:flex justify-center  items-center text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1vw,1em)] h-[15px] ">
                  TOP PLUS
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  600 SMS
                </h2>
              </div>
            </div>

            <div className="basic2 border-l border-l-[#FFA55E] p-2 w-[16.1vw] text-center bg-[#FF7800] hidden  lg:flex justify-center items-center text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1vw,1em)] h-[15px] ">
                  TOP ELITE
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  1.000 SMS
                </h2>
              </div>
            </div>
            <div className="grid">
              <div className="basic2 border-l border-l-[#FFA55E] p-2 w-[16.1vw] text-center  bg-[#FF7800] hidden lg:flex justify-center items-center rounded-tr-[40px] rounded-br-[50px] text-gray-800 ">
                <div className="grid">
                  <h1 className="text-white text-[clamp(0.8rem,1vw,1em)] h-[15px] ">
                    TOP ELITE
                  </h1>
                  <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                    3.000 SMS
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100vw] md:w-full  hidden lg:flex">
            <div className="border-r p-3 pt-[20px] pb-[20px]  text-[clamp(0.6rem,1.3vw,1rem)]  text-center flex justify-center items-center w-[23vw]  text-gray-400 ">
              Indicado para empresas, profissionais liberais com uma demanda
              pequena de envio de SMS mensal. Exemplos: Advogados, Clínicas
              Médicas, Assistências técnicas, escolas de Educação infantil e
              outros.
            </div>

            <div className="border-r p-3 pt-[20px] pb-[20px]  text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[23vw] flex justify-center items-center text-gray-400 ">
              Indicado para empresas, profissionais liberais com uma demanda
              pequena de envio de SMS mensal. Exemplos: Advogados, Clínicas
              Médicas, Assistências técnicas, escolas de Educação infantil e
              outros.
            </div>
            <div className="border-r p-3 pt-[20px] pb-[20px]  text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[23vw] flex justify-center items-center text-gray-400 ">
              Indicado para empresas, profissionais liberais com uma demanda
              pequena de envio de SMS mensal. Exemplos: Advogados, Clínicas
              Médicas, Assistências técnicas, escolas de Educação infantil e
              outros.
            </div>
            <div className="p-3 text-[clamp(0.6rem,1.3vw,1rem)] pt-[20px] pb-[20px]   text-center w-[23vw] flex justify-center items-center text-gray-400 ">
              Indicado para empresas, profissionais liberais com uma demanda
              pequena de envio de SMS mensal. Exemplos: Advogados, Clínicas
              Médicas, Assistências técnicas, escolas de Educação infantil e
              outros.
            </div>
          </div>
          <div className="w-[100vw] md:w-full hidden lg:flex border-[4px] rounded-[50px] border-orange-500  bg-white h-[130px]  ">
            <div className="border-r border-r-[#9976A2] p-5 text-[clamp(0.6rem,0.9vw,0.9rem)] bg-[#581A73] text-center w-[23vw]  rounded-tl-[46px] rounded-bl-[46px]  text-white font-semibold">
              <h1 className="h-[0px]">VALOR POR SMS</h1>
              <h2 className=" text-[clamp(0rem,4.5vw,4.5rem)] font-ArabotoBlack ">
                0,21
              </h2>
            </div>
            <div className="border-r border-r-[#9976A2] p-5 text-[clamp(0.6rem,0.9vw,0.9rem)] bg-[#581A73] text-center w-[23vw]     text-orange-500 font-semibold">
              <h1 className="h-[0px]">VALOR POR SMS</h1>
              <h2 className=" text-[clamp(0rem,4.5vw,4.5rem)] font-ArabotoBlack ">
                0,21
              </h2>
            </div>
            <div className="border-r border-r-[#9976A2] p-5 text-[clamp(0.6rem,0.9vw,0.9rem)] bg-[#581A73] text-center w-[23vw]    text-white font-semibold">
              <h1 className="h-[0px]">VALOR POR SMS</h1>
              <h2 className=" text-[clamp(0rem,4.5vw,4.5rem)] font-ArabotoBlack">
                0,21
              </h2>
            </div>
            <div className="p-5 text-[clamp(0.6rem,0.9vw,0.9rem)] bg-[#581A73] text-center w-[23vw]  rounded-tr-[46px] rounded-br-[46px]  text-orange-500 font-semibold">
              <h1 className="h-[0px]">VALOR POR SMS</h1>
              <h2 className=" text-[clamp(0rem,4.5vw,4.5rem)] font-ArabotoBlack">
                0,21
              </h2>
            </div>
          </div>
          <div className="w-[100vw] md:h-[120px] md:w-full hidden lg:flex">
            <div className="border-r p-3  text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[23vw]  pt-[20px]   text-purple-900 font-semibold">
              <h1 className="h-[5px]">VALOR POR PACOTE</h1>
              <h2 className=" text-[clamp(0rem,4vw,4rem)] font-ArabotoBlack ">
                63,00
              </h2>
            </div>
            <div className="border-r p-3 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[23vw]  pt-[20px]   text-orange-500 font-semibold">
              <h1 className="h-[5px] ">VALOR POR PACOTE</h1>
              <h2 className=" text-[clamp(0rem,4vw,4rem)] font-ArabotoBlack ">
                63,00
              </h2>
            </div>
            <div className="border-r p-3 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[23vw]  pt-[20px]   text-purple-900 font-semibold">
              <h1 className="h-[5px] ">VALOR POR PACOTE</h1>
              <h2 className=" text-[clamp(0rem,4vw,4rem)] font-ArabotoBlack">
                63,00
              </h2>
            </div>
            <div className=" p-3 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[23vw]  pt-[20px]   text-orange-500 font-semibold">
              <h1 className="h-[5px] ">VALOR POR PACOTE</h1>
              <h2 className=" text-[clamp(0rem,4vw,4rem)] font-ArabotoBlack">
                63,00
              </h2>
            </div>
          </div>

          <div className="w-full hidden lg:flex bg-[#581A73] rounded-[50px] h-[110px] border-[4px] border-orange-500">
            <div className="border-l p-2 text-center bg-[#581A73]  rounded-tl-[46px] w-[23vw] hidden lg:flex  justify-center items-center rounded-bl-[46px]  text-gray-800 font-semibold">
              <h1 className="text-white hidden lg:flex text-[clamp(1.5rem,5vw,2rem)] font-bold font-ArabotoBlack">
                ASSINE
              </h1>
            </div>
            <div className="border-l  border-l-[#9976A2] hidden lg:flex  p-3 text-center  w-[23vw]   justify-center items-center  text-gray-800 ">
              <h1 className="text-orange-500 text-[clamp(1.5rem,5vw,2rem)] font-bold font-ArabotoBlack">
                ASSINE
              </h1>
            </div>

            <div className="border-l border-l-[#9976A2] hidden lg:flex p-2 text-center  w-[23vw] justify-center items-center  text-gray-800 font-semibold">
              <h1 className="text-white text-[clamp(1.5rem,5vw,2rem)] font-bold font-ArabotoBlack">
                ASSINE
              </h1>
            </div>
            <div className="border-l border-l-[#9976A2] hidden lg:flex p-2 text-center  w-[23vw] justify-center items-center  text-gray-800 font-semibold">
              <h1 className="text-orange-500 text-[clamp(1.5rem,5vw,2rem)] font-bold font-ArabotoBlack">
                ASSINE
              </h1>
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

export default Sms;
