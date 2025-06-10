import "./style.css";
import Assine from "../Hosting/Images/Hospedagem_01.png";
import Logo from "../Images/logo_03.avif";
import Footer from "../Footer/index";
import axios from "axios";
import { useState } from "react";

//Definir o que cada coisa é
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

  //Armazenar e reproduzir os campos em branco
  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
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
    dominioRegistrado: "",
  });
  const [showModal, setShowModal] = useState(false); // Controlar exibição do Modal

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Limpa o erro do campo quando o usuário digita alguma coisa
    setErrors({
      ...errors,
      [name]: "",
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

    let formIsValid = true;
    let errorMessages: Record<keyof FormData, string> = { ...errors };

    //Onde irá aparecer a mensagem em vermelho
    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormData;
      if (formData[field] === "") {
        formIsValid = false;
        errorMessages[field] = "Preencha este campo!";
      } else {
        errorMessages[field] = "";
      }
    });

    if (!formIsValid) {
      setErrors(errorMessages);
      return;
    }

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
      setShowModal(true);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-[#f0f8ff] overflow-x-hidden">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold">Envio Bem-Sucedido!</h2>
            <p className="mt-2">
              Seu formulário foi enviado com sucesso, em breve entraremos em
              contato!
            </p>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <div className="w-full flex relative ">
        <div className=" w-full absolute flex justify-center">
          <img className="w-[350px] p-[20px]" src={Logo} alt="" />
        </div>
        <div className="absolute flex w-full text-[#FF7800]  h-full items-center justify-center">
          <h1 className="text-[clamp(1rem,2.4vw,2.4rem)] font-ArabotoMedium text-center">
            PREENCHA OS DADOS ABAIXO CORRETAMENTE
          </h1>
        </div>
        <img className="w-full h-[800px]" src={Assine} alt="" />
        <div className="absolute mt-[80px] flex h-full w-full justify-center items-center">
          <div className="flex justify-center pr-[20px]">
            <a
              href="https://novo.topdns.com.br/hospedagem"
              rel="noopener noreferrer"
            >
              <button
                title="HOSPEDAGEM"
                className=" buttonorange22   font-winner bg-[#FF7900] min-w-[150px] text-[clamp(1em,1.3vw,1.3em)] hover:bg-orange-700 text-white w-[clamp(5em,7vw,7em)] border-r-2 border-r-[#FFA55E]   py-2 px-4"
              >
                HOSPEDAGEM
              </button>
            </a>
            <a href="https://novo.topdns.com.br/sms" rel="noopener noreferrer">
              <button
                title="TOPSMS"
                className=" bg-[#FF7900]    font-winner min-w-[100px] hover:bg-orange-700 text-[clamp(1em,1.3vw,1.3em)] text-white w-[clamp(5em,6vw,6em)] border-r-2 border-r-[#FFA55E]  py-2 px-4"
              >
                TOPSMS
              </button>
            </a>
            <a href="https://topdns.com.br/assine" rel="noopener noreferrer">
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

      <main className="w-full pt-[40px] pb-[40px] grid justify-items-center">
        <h1 className="p-4  text-[35px] text-[#FF7900] font-ArabotoMedium">
          ASSINE
        </h1>
        <div className="flex w-[100vw] justify-center">
          <span className="w-[800px] text-center p-5 text-[18px] text-gray-400">
            Adicione abaixo as informações de contato e qual plano deseja
            contratar, que um de nossos consultores entrara em contato.
          </span>
        </div>
      </main>
      <div className="w-full grid justify-items-center h-full bg-[#f0f8ff]">
        <div className="  w-[clamp(320px,100vw,900px)] p-10  ">
          <div className="w-full grid md:flex justify-center gap-[40px]">
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="nome"
                placeholder="DIGITE SEU NOME"
                value={formData.nome}
                onChange={handleChange}
              />
              {errors.nome && (
                <p className="text-red-500 text-sm">{errors.nome}</p>
              )}
            </div>
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="email"
                placeholder="DIGITE SEU EMAIL"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="telefone"
                placeholder="DIGITE SEU TELEFONE"
                value={formData.telefone}
                onChange={handleChange}
              />
              {errors.telefone && (
                <p className="text-red-500 text-sm">{errors.telefone}</p>
              )}
            </div>
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="celular"
                placeholder="DIGITE SEU CELULAR"
                value={formData.celular}
                onChange={handleChange}
              />
              {errors.celular && (
                <p className="text-red-500 text-sm">{errors.celular}</p>
              )}
            </div>
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="rg"
                placeholder="DIGITE SEU RG"
                value={formData.rg}
                onChange={handleChange}
              />
              {errors.rg && <p className="text-red-500 text-sm">{errors.rg}</p>}
            </div>
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="cpfCnpj"
                placeholder="CPF/CNPJ"
                value={formData.cpfCnpj}
                onChange={handleChange}
              />
              {errors.cpfCnpj && (
                <p className="text-red-500 text-sm">{errors.cpfCnpj}</p>
              )}
            </div>
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <div className="grid w-full">
              <input
                className="w-[90vw] md:w-full p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="endereco"
                placeholder="ENDEREÇO/NÚMERO"
                value={formData.endereco}
                onChange={handleChange}
              />
              {errors.endereco && (
                <p className="text-red-500 text-sm">{errors.endereco}</p>
              )}
            </div>
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="cep"
                placeholder="CEP"
                value={formData.cep}
                onChange={handleChange}
              />
              {errors.cep && (
                <p className="text-red-500 text-sm">{errors.cep}</p>
              )}
            </div>
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="bairro"
                placeholder="BAIRRO"
                value={formData.bairro}
                onChange={handleChange}
              />
              {errors.bairro && (
                <p className="text-red-500 text-sm">{errors.bairro}</p>
              )}
            </div>
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="dominio"
                placeholder="DIGITE SEU DOMINIO"
                value={formData.dominio}
                onChange={handleChange}
              />
              {errors.dominio && (
                <p className="text-red-500 text-sm">{errors.dominio}</p>
              )}
            </div>
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <div className="grid w-full">
              <input
                className="w-[90vw] md:w-full p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="assunto"
                placeholder="ASSUNTO"
                value={formData.assunto}
                onChange={handleChange}
              />
              {errors.assunto && (
                <p className="text-red-500 text-sm">{errors.assunto}</p>
              )}
            </div>
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <div className="grid w-full">
              <input
                className="w-[90vw] md:w-full p-2 h-[200px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] flex text-center text-gray-800  font-normal"
                name="mensagem"
                placeholder="DIGITE SUA MENSAGEM"
                value={formData.mensagem}
                onChange={handleChange}
              />
              {errors.mensagem && (
                <p className="text-red-500 text-sm">{errors.mensagem}</p>
              )}
            </div>
          </div>
          <div className="w-full pt-[50px] p-5 text-center">
            <h1 className="text-[16px] font-semibold">
              JÁ POSSUI DOMÍNIO REGISTRADO?
            </h1>
            <div className="flex justify-center p-5 gap-[20px]">
              <button
                className={`p-3 w-[70px] rounded-[5px] text-white ${
                  formData.dominioRegistrado ? "bg-red-800" : "bg-red-500"
                }`}
                onClick={() => handleRadioChange(true)}
              >
                SIM
              </button>
              <button
                className={`p-3 w-[70px] rounded-[5px] text-white ${
                  !formData.dominioRegistrado ? "bg-green-800" : "bg-green-600"
                }`}
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
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AssinePage;
