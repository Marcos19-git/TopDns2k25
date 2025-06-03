import { useState, useEffect } from "react";
import axios from "axios";
import Rodape1 from "../Images/Home_51.avif";
import Rodape2 from "../Images/Home_53.avif";
import Rodape3 from "../Images/Home_55.avif";
import Rodape4 from "../Images/Home_58.avif";
import Twitter from "../Images/icon-twitter.avif";

interface Contato {
  id: number;
  tipo: string;
  link: string;
  created_at: string;
  updated_at: string;
}

function Footer() {
  const [contatos, setContatos] = useState<{
    telefone: { tipo: string; link: string };
    email: { tipo: string; link: string };
    facebook: { tipo: string; link: string };
    instagram: { tipo: string; link: string };
    twitter: { tipo: string; link: string };
  }>({
    telefone: { tipo: "", link: "" },
    email: { tipo: "", link: "" },
    facebook: { tipo: "", link: "" },
    instagram: { tipo: "", link: "" },
    twitter: { tipo: "", link: "" },
  });

  useEffect(() => {
    axios
      .get<Contato[]>("https://novo.topdns.com.br/contato")
      .then((response) => {
        const data = response.data;

        setContatos({
          telefone: data.find((c) => c.id === 1) || { tipo: "", link: "" },
          email: data.find((c) => c.id === 5) || { tipo: "", link: "" },
          facebook: data.find((c) => c.id === 2) || { tipo: "", link: "" },
          instagram: data.find((c) => c.id === 3) || { tipo: "", link: "" },
          twitter: data.find((c) => c.id === 4) || { tipo: "", link: "" },
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar os contatos:", error);
      });
  }, []);

  return (
    <section>
      <div className="flex w-full justify-center p-[60px] bg-[#ff8400]">
        <div className="controldivfooter flex justify-center flex-wrap gap-[80px] gap-y-[40px] max-sm:grid ">
          {/* Telefone */}
          <div className="hover:opacity-50">
            <a
              href={`tel:${contatos.telefone.link}`}
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
              {contatos.telefone.tipo}
            </p>
          </div>

          {/* Email */}
          <div className="hover:opacity-50">
            <a
              className="flex justify-center"
              href={`mailto:${contatos.email.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[50px] h-[50px]" src={Rodape2} />
            </a>
            <p className="tell  scale-y-150 cursor-pointer flex mt-[20px] justify-center font-semibold text-white text-[clamp(0.8rem,_4vw,_0.7rem)]">
              {contatos.email.tipo}
            </p>
          </div>

          {/* Facebook */}
          <div className="run2 hover:opacity-50 ">
            <a
              className="flex justify-center"
              href={contatos.facebook.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[50px] h-[50px]" src={Rodape3} />
            </a>
            <p className="tell  scale-y-150 cursor-pointer flex mt-[20px] font-semibold justify-center text-white text-[clamp(0.8rem,_4vw,_0.7rem)]">
              {contatos.facebook.tipo}
            </p>
          </div>

          {/* Instagram */}
          <div className="run1 hover:opacity-50">
            <a
              className="flex justify-center"
              href={contatos.instagram.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[50px] h-[50px]" src={Rodape4} />
            </a>
            <p className="tell  scale-y-150 cursor-pointer flex mt-[20px] justify-center font-semibold text-white text-[clamp(0.8rem,_4vw,_0.7rem)]">
              {contatos.instagram.tipo}
            </p>
          </div>

          {/* Twitter */}
          <div className="run1 hover:opacity-50 ">
            <a
              className="flex justify-center"
              href={contatos.twitter.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[60px] h-[50px]" src={Twitter} />
            </a>
            <p className="tell  scale-y-150 cursor-pointer flex mt-[20px] text-white font-semibold justify-center text-[clamp(0.8rem,_4vw,_0.7rem)]">
              {contatos.twitter.tipo}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black w-full">
        <h1 className="bg-black text-[#ff8400] cursor-default flex justify-center items-center text-center text-[clamp(0.8rem,_4vw,_1rem)] p-[20px] font-bold">
          Copyright 2025 - Todos os direitos Reservados TopDns
        </h1>
      </div>
    </section>
  );
}

export default Footer;
