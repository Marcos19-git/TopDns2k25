import ImgHeader from "../Hosting/Images/Hospedagem_01.png";
import Logo03 from "../Images/logo_03.avif";
import Rodape1 from "..//Images/Home_51.avif";
import Rodape2 from "../Images/Home_53.avif";
import Rodape3 from "../Images/Home_55.avif";
import Rodape4 from "../Images/Home_58.avif";
import Twitter from "../Images/icon-twitter.avif";
import "./style.css";
import "../Hosting/style.css";
import Carrossel2 from "./carrossel2";
function Sms() {
  return (
    <div className="w-full h-[100vh] overflow-x-hidden">
      <div className="w-full grid relative">
        <img className=" h-[95vh] w-full" src={ImgHeader} alt="" />
        <div className="w-full absolute p-[10px] grid justify-center items-center z-10">
          <img className="w-[400px] p-[20px]" src={Logo03} alt="" />
        </div>
        <div className="absolute flex h-full w-full justify-center items-center">
          <div className="grid">
            {/* Aqui, envolva os títulos em uma div com classes responsivas */}
            <div className="absolute top-[40%] left-[5%] transform -translate-y-1/2 text-white py-2 rounded-md flex flex-col items-center w-full max-w-[90%] px-4">
              <h1 className="register text-orange-500 text-center p-10 text-[clamp(0.3em,5vw,3.2em)] font-bold ">
                SMS EM GRANDES QUANTIDADES
              </h1>

              {/* Botões permanecem iguais */}
              <div className="flex justify-center  w-full">
                <a
                  href="https://topdns.com.br/hospedagem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    title="HOSPEDAGEM"
                    className="buttonorange buttonn2 buttonorange22 bg-[#ff8400] min-w-[80px] text-[clamp(0.3em,1vw,1.3em)] hover:bg-orange-700 text-white w-[clamp(5em,10vw,9.75em)] border-r-2 border-white font-bold py-2 px-4"
                  >
                    HOSPEDAGEM
                  </button>
                </a>
                <a
                  href="https://topdns.com.br/topsms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    title="TOPSMS"
                    className="buttonorange buttonn2 bg-[#ff8400] min-w-[60px] hover:bg-orange-700 text-[clamp(0.3em,1vw,1.3em)] text-white w-[clamp(5em,10vw,8.75em)] border-r-2 border-white font-bold py-2 px-4"
                  >
                    TOPSMS
                  </button>
                </a>
                <a
                  href="https://topdns.com.br/assine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    title="ASSINE"
                    className="buttonorange buttonn2 bg-[#ff8400] hover:bg-orange-700 min-w-[60px] text-[clamp(0.3em,1vw,1.3em)] text-white w-[clamp(5em,10vw,8.75em)] font-bold py-2 px-4"
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
            className=" z-20 lg:w-[55vw] w-[100vw] 
              h-full
             border-2 border-[#ff8400] p-8 bg-[#ff8623] transition-all duration-200 ease-in-out rounded-[40px]"
          >
            <h1 className="items-center text-purple-800  text-[2.3em] text-center">
              CONHEÇA O TOPSMS
            </h1>
            <h2 className="w-full text-center  text-white font-bold text-[1.3em] pt-[20px]">
              Uma plataforma de envio de mensagem via SMS ( sigla de Short
              Message Service, que em português significa Serviço de Mensagens
              Curtas ).
            </h2>
            <h2 className="w-full text-center text-white font-bold text-[1.3em] pt-[0px] pb-[10px]">
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
        <div className="eid2 w-[65vw]   border-[3px]  border-amber-400 rounded-[50px] hidden lg:flex flex-wrap">
          <div className="basic2 p-4 w-[16.1vw] rounded-tl-[50px] hidden lg:flex border-orange-400 justify-center items-center rounded-bl-[50px] text-center  bg-orange-400 text-gray-800 ">
            <div className="grid">
              <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                TOP BASIC
              </h1>
              <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                300 SMS
              </h2>
            </div>
          </div>
          <div className="basic2 border-l p-2 w-[16.1vw] text-center bg-orange-400 hidden lg:flex justify-center  items-center text-gray-800 ">
            <div className="grid">
              <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                TOP PLUS
              </h1>
              <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                600 SMS
              </h2>
            </div>
          </div>

          <div className="basic2 border-l p-2 w-[16.1vw] text-center bg-orange-400 hidden  lg:flex justify-center items-center text-gray-800 ">
            <div className="grid">
              <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                TOP ELITE
              </h1>
              <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                1.000 SMS
              </h2>
            </div>
          </div>
          <div className="grid">
            <div className="basic2 border-l p-2 w-[16.1vw] text-center  bg-orange-400 hidden lg:flex justify-center items-center rounded-tr-[40px] rounded-br-[50px] text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                  TOP ELITE
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  3.000 SMS
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[100vw] md:w-full  hidden lg:flex">
            <div className="border-r p-2  text-[clamp(0.6rem,1.3vw,1rem)]  text-center flex justify-center items-center w-[23vw]  text-gray-400 font-semibold">
              Indicado para empresas, profissionais liberais com uma demanda
              pequena de envio de SMS mensal. Exemplos: Advogados, Clínicas
              Médicas, Assistências técnicas, escolas de Educação infantil e
              outros.
            </div>

            <div className="border-r p-2 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[23vw] flex justify-center items-center text-gray-400 font-semibold">
              Indicado para empresas, profissionais liberais com uma demanda
              pequena de envio de SMS mensal. Exemplos: Advogados, Clínicas
              Médicas, Assistências técnicas, escolas de Educação infantil e
              outros.
            </div>
            <div className="border-r p-2 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[23vw] flex justify-center items-center text-gray-400 font-semibold">
              Indicado para empresas, profissionais liberais com uma demanda
              pequena de envio de SMS mensal. Exemplos: Advogados, Clínicas
              Médicas, Assistências técnicas, escolas de Educação infantil e
              outros.
            </div>
            <div className="p-2 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[23vw] flex justify-center items-center text-gray-400 font-semibold">
              Indicado para empresas, profissionais liberais com uma demanda
              pequena de envio de SMS mensal. Exemplos: Advogados, Clínicas
              Médicas, Assistências técnicas, escolas de Educação infantil e
              outros.
            </div>
          </div>
          <div className="w-[100vw] md:w-full hidden lg:flex bg-white h-[130px]  ">
            <div className="border p-5 text-[clamp(0.6rem,1.3vw,1.3rem)] bg-purple-900 text-center w-[23vw]  rounded-tl-[50px] rounded-bl-[50px]  text-white font-semibold">
              <h1 className="h-[15px]">VALOR POR SMS</h1>
              <h2 className=" text-[clamp(0rem,3vw,3.5rem)] ">0,21</h2>
            </div>
            <div className="border p-5 text-[clamp(0.6rem,1.3vw,1.3rem)] bg-purple-900 text-center w-[23vw]     text-orange-500 font-semibold">
              <h1 className="h-[15px]">VALOR POR SMS</h1>
              <h2 className=" text-[clamp(0rem,3vw,3.5rem)] ">0,21</h2>
            </div>
            <div className="border p-5 text-[clamp(0.6rem,1.3vw,1.3rem)] bg-purple-900 text-center w-[23vw]    text-white font-semibold">
              <h1 className="h-[15px]">VALOR POR SMS</h1>
              <h2 className=" text-[clamp(0rem,3vw,3.5rem)] ">0,21</h2>
            </div>
            <div className="border p-5 text-[clamp(0.6rem,1.3vw,1.3rem)] bg-purple-900 text-center w-[23vw]  rounded-tr-[50px] rounded-br-[50px]  text-orange-500 font-semibold">
              <h1 className="h-[15px]">VALOR POR SMS</h1>
              <h2 className=" text-[clamp(0rem,3vw,3.5rem)] ">0,21</h2>
            </div>
          </div>
          <div className="w-[100vw] md:w-full hidden lg:flex">
            <div className="border p-3 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[23vw]  pt-[20px]   text-purple-900 font-semibold">
              <h1 className="h-[12px]">VALOR POR PACOTE</h1>
              <h2 className=" text-[clamp(0rem,3vw,3.4rem)] ">63,00</h2>
            </div>
            <div className="border p-3 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[23vw]  pt-[20px]   text-orange-500 font-semibold">
              <h1 className="h-[12px]">VALOR POR PACOTE</h1>
              <h2 className=" text-[clamp(0rem,3vw,3.4rem)] ">63,00</h2>
            </div>
            <div className="border p-3 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[23vw]  pt-[20px]   text-purple-900 font-semibold">
              <h1 className="h-[12px]">VALOR POR PACOTE</h1>
              <h2 className=" text-[clamp(0rem,3vw,3.4rem)] ">63,00</h2>
            </div>
            <div className="border p-3 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[23vw]  pt-[20px]   text-orange-500 font-semibold">
              <h1 className="h-[12px]">VALOR POR PACOTE</h1>
              <h2 className=" text-[clamp(0rem,3vw,3.4rem)] ">63,00</h2>
            </div>
          </div>

          <div className="w-full hidden lg:flex bg-purple-900 rounded-[50px] h-[110px] border-2 border-orange-500">
            <div className="border-l p-2 text-center bg-purple-900  rounded-tl-[50px] w-[23vw] hidden lg:flex  justify-center items-center rounded-bl-[48px]  text-gray-800 font-semibold">
              <h1 className="text-white hidden lg:flex text-[clamp(1.5rem,2.8vw,2.8rem)]">
                VALORES
              </h1>
            </div>
            <div className="border-l   hidden lg:flex  p-3 text-center  w-[23vw]   justify-center items-center  text-gray-800 ">
              <h1 className="text-orange-500 text-[clamp(1.5rem,5vw,2rem)] font-bold">
                ASSINE
              </h1>
            </div>

            <div className="border-l hidden lg:flex p-2 text-center  w-[23vw] justify-center items-center  text-gray-800 font-semibold">
              <h1 className="text-white text-[clamp(1.5rem,5vw,2rem)] font-bold">
                ASSINE
              </h1>
            </div>
            <div className="border-l hidden lg:flex p-2 text-center  w-[23vw] justify-center items-center  text-gray-800 font-semibold">
              <h1 className="text-orange-500 text-[clamp(1.5rem,5vw,2rem)] font-bold">
                ASSINE
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center p-[70px] bg-[#ff8400]">
        <div className="controldivfooter flex justify-center flex-wrap gap-[80px] gap-y-[40px] max-sm:grid ">
          {/* Telefone */}
          <div className="hover:opacity-50">
            <a
              href="tel:6632110010"
              className="flex justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="flex justify-center w-[50px] h-[50px]"
                src={Rodape1}
              />
            </a>
            <p className="tell  scale-y-150 flex mt-[17px] font-semibold text-[clamp(0.8rem,_4vw,_0.9rem)] text-white justify-center cursor-pointer">
              (66) 3211-0010
            </p>
          </div>

          {/* Email */}
          <div className="hover:opacity-50">
            <a
              className="flex justify-center"
              href="mailto:COMERCIAL@TOPSAPP.COM.BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[50px] h-[50px]" src={Rodape2} />
            </a>
            <p className="tell  scale-y-150 cursor-pointer flex mt-[20px] justify-center font-semibold text-white text-[clamp(0.8rem,_4vw,_0.7rem)]">
              COMERCIAL@TOPSAPP.COM.BR
            </p>
          </div>

          {/* Facebook */}
          <div className="hover:opacity-50 lg:ml-[10px]">
            <a
              className="flex justify-center w-full"
              href="https://www.facebook.com/topsapp10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[50px] h-[50px]" src={Rodape3} />
            </a>
            <p className="tell  scale-y-150 cursor-pointer flex mt-[20px] font-semibold justify-center text-white text-[clamp(0.8rem,_4vw,_0.7rem)]">
              FACEBOOK
            </p>
          </div>

          {/* Instagram */}
          <div className="hover:opacity-50 lg:ml-[30px]">
            <a
              className="flex justify-center"
              href="https://www.instagram.com/topsapp10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[50px] h-[50px]" src={Rodape4} />
            </a>
            <p className="tell  scale-y-150 cursor-pointer flex mt-[20px] justify-center font-semibold text-white text-[clamp(0.8rem,_4vw,_0.7rem)]">
              INSTAGRAM
            </p>
          </div>

          {/* Twitter */}
          <div className="hover:opacity-50 lg:ml-[30px]">
            <a
              className="flex justify-center"
              href="https://twitter.com/topsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[60px] h-[50px]" src={Twitter} />
            </a>
            <p className="tell  scale-y-150 cursor-pointer flex mt-[20px] text-white font-semibold justify-center text-[clamp(0.8rem,_4vw,_0.7rem)]">
              TWITTER
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black w-full">
        <h1 className="bg-black text-[#ff8400] cursor-default flex justify-center items-center text-center text-[clamp(0.8rem,_4vw,_1.2rem)] p-[20px] font-bold">
          Copyright 2025 - Todos os direitos Reservados TopDns
        </h1>
      </div>
    </div>
  );
}

export default Sms;
