import "./style.css";
import Assine from "../Images/Assine_01.png";
import Logo from "../Images/logo_03.avif";
import Boll from "../Images/Layout_11.png";
import Rodape1 from "../Images/Home_51.avif";
import Rodape2 from "../Images/Home_53.avif";
import Rodape3 from "../Images/Home_55.avif";
import Rodape4 from "../Images/Home_58.avif";
import Twitter from "../Images/icon-twitter.avif";
import axios from "axios";
import { useState } from "react";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  celular: string;
  rg: string;
  cpfCnpj: string;
  endereco: string;
  cep: string;
  bairro: string;
  dominio: string;
  assunto: string;
  mensagem: string;
  dominioRegistrado: boolean;
}

function AssinePage() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    celular: "",
    rg: "",
    cpfCnpj: "",
    endereco: "",
    cep: "",
    bairro: "",
    dominio: "",
    assunto: "",
    mensagem: "",
    dominioRegistrado: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (value: boolean) => {
    setFormData({
      ...formData,
      dominioRegistrado: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://novo.topdns.com.br/api/assine",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-[#f0f8ff] overflow-x-hidden">
      <div className="w-full flex relative ">
        <div className=" w-full absolute flex justify-center">
          <img
            className="w-[clamp(120px,40vw,420px)] pt-[10px]"
            src={Logo}
            alt=""
          />
        </div>
        <img className="w-full" src={Assine} alt="" />
      </div>
      <main className="w-full pt-[40px] pb-[40px] grid justify-items-center">
        <img className="h-[60px] w-[50px]" src={Boll} alt="" />
        <h1 className="p-4  text-[25px]">ASSINE</h1>
        <div className="flex w-[100vw] justify-center">
          <span className="w-[600px] text-center p-5 text-gray-400">
            Adicione abaixo as informações de contato e qual plano deseja
            contratar, que um de nossos consultores entrara em contato.
          </span>
        </div>
      </main>
      <div className="w-full grid justify-items-center h-full bg-[#f0f8ff]">
        <div className="  w-[clamp(320px,100vw,900px)] p-10  ">
          <div className="w-full grid md:flex justify-center gap-[40px]">
            <input
              className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
              type="text"
              name="nome"
              placeholder="DIGITE SEU NOME"
              value={formData.nome}
              onChange={handleChange}
            />

            <input
              className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
              type="text"
              name="email"
              placeholder="DIGITE SEU EMAIL"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
              type="text"
              name="telefone"
              placeholder="DIGITE SEU TELEFONE"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <input
              className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
              type="text"
              name="celular"
              placeholder="DIGITE SEU CELULAR"
              value={formData.celular}
              onChange={handleChange}
            />
            <input
              className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
              type="text"
              name="rg"
              placeholder="DIGITE SEU RG"
              value={formData.rg}
              onChange={handleChange}
            />
            <input
              className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
              type="text"
              name="cpfCnpj"
              placeholder="CPF/CNPJ"
              value={formData.cpfCnpj}
              onChange={handleChange}
            />
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <input
              className="w-[90vw] md:w-full p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
              type="text"
              name="endereco"
              placeholder="ENDEREÇO/NÚMERO"
              value={formData.endereco}
              onChange={handleChange}
            />
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <input
              className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
              type="text"
              name="cep"
              placeholder="CEP"
              value={formData.cep}
              onChange={handleChange}
            />
            <input
              className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
              type="text"
              name="bairro"
              placeholder="BAIRRO"
              value={formData.bairro}
              onChange={handleChange}
            />
            <input
              className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
              type="text"
              name="dominio"
              placeholder="DIGITE SEU DOMINIO"
              value={formData.dominio}
              onChange={handleChange}
            />
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <input
              className="w-[90vw] md:w-full p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
              type="text"
              name="assunto"
              placeholder="ASSUNTO"
              value={formData.assunto}
              onChange={handleChange}
            />
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <input
              className="w-[90vw] md:full p-2 h-[200px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
              name="mensagem"
              placeholder="DIGITE SUA MENSAGEM"
              value={formData.mensagem}
              onChange={handleChange}
            />
          </div>
          <div className="w-full pt-[50px] p-5 text-center">
            <h1 className="text-[16px] font-semibold">
              JÁ POSSUI DOMÍNIO REGISTRADO?
            </h1>
            <div className="flex justify-center p-5 gap-[20px]">
              <button
                className="bg-red-500 p-3 w-[70px] rounded-[5px] text-white"
                onClick={() => handleRadioChange(true)}
              >
                SIM
              </button>
              <button
                className="bg-green-600 p-3 w-[70px] rounded-[5px] text-white"
                onClick={() => handleRadioChange(false)}
              >
                NÃO
              </button>
            </div>
            <div className="w-full h-[2px] bg-gray-300"></div>
            <div className="w-full flex justify-center p-5">
              <button
                className="bg-purple-800 w-[100px] text-white p-3 rounded-[10px]"
                onClick={handleSubmit}
              >
                ENVIAR
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-[100vw] justify-center p-[45px] bg-[#ff8400]">
          <div className="controldivfooter flex justify-center flex-wrap gap-[100px] gap-y-[40px] max-sm:grid ">
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
            <div className="hover:opacity-50">
              <a
                className="flex justify-center"
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
            <div className="hover:opacity-50">
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
            <div className="hover:opacity-50">
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
          <h1 className="bg-black text-[#ff8400] cursor-default flex justify-center items-center text-center text-[clamp(0.8rem,_4vw,_1rem)] p-[20px]">
            Copyright 2025 - Todos os direitos Reservados TopDns
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AssinePage;
