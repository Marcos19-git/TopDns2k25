import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css/pagination";
import "./index";

function Carrossel2() {
  const slides = [
    {
      titulo: " BASIC",
      subtitulo: "300 SMS",
      valorsms: "0,21",
      texto:
        "Indicado para empresas, profissionais liberais com uma demanda pequena de envio de SMS mensal. Exemplos: Advogados, Clínicas Médicas, Assistências técnicas, escolas de Educação infantil e outros.",
      valorpacote: "63,00",
    },
    {
      titulo: "PLUS",
      subtitulo: "600 SMS",
      valorsms: "0,21",
      texto:
        "Indicado para empresas, profissionais liberais com uma demanda pequena de envio de SMS mensal. Exemplos: Advogados, Clínicas Médicas, Assistências técnicas, escolas de Educação infantil e outros.",
      valorpacote: "63,00",
    },
    {
      titulo: "ELITE",
      subtitulo: "1000 SMS",
      valorsms: "0,21",
      texto:
        "Indicado para empresas, profissionais liberais com uma demanda pequena de envio de SMS mensal. Exemplos: Advogados, Clínicas Médicas, Assistências técnicas, escolas de Educação infantil e outros.",
      valorpacote: "63,00",
    },
    {
      titulo: "ELITE",
      subtitulo: "3000 SMS",
      valorsms: "0,21",
      texto:
        "Indicado para empresas, profissionais liberais com uma demanda pequena de envio de SMS mensal. Exemplos: Advogados, Clínicas Médicas, Assistências técnicas, escolas de Educação infantil e outros.",
      valorpacote: "63,00",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center pb-20 pt-20">
      <Swiper
        spaceBetween={200}
        slidesPerView={1} // só 1 slide visível por vez
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Pagination, Autoplay]}
        className="w-full max-w-[80vw] "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full border-4 border-[#FF7800] rounded-[50px]  bg-white ">
              <div className="flex bg-purple-900 h-[100px] rounded-tr-[44px] rounded-tl-[44px]">
                <div className="bg-[#FF7800]  rounded-tl-[40px] rounded-tr-[40px] p-4 grid  text-center text-white w-full">
                  <h2 className="text-[1.4em] h-[24px] ">TOP {slide.titulo}</h2>
                  <h2 className="text-[2.5em]">{slide.subtitulo}</h2>
                </div>
              </div>
              <div className="flex  p-[1.35em] justify-center items-center ">
                <div className="bg-white grid  text-center text-gray-400 w-full">
                  <h2>{slide.texto}</h2>
                </div>
              </div>
              <div className="flex bg-purple-900 h-[80px]  ">
                <div className="bg-purple-900   p-4 grid  text-center text-white font-bold w-full">
                  <h2 className="text-[1.5em] h-[14px] ">VALOR POR SMS</h2>
                  <h2 className="h-[20px] text-[30px]">{slide.valorsms}</h2>
                </div>
              </div>
              <div className="flex bg-purple-900 h-[80px] rounded-tr-[44px] rounded-tl-[44px]">
                <div className="bg-white  rounded-tl-[40px] rounded-tr-[40px] p-4 grid  text-center text-purple-800 font-bold w-full">
                  <h2 className="text-[1.5em] h-[20px] ">VALOR POR PACOTE</h2>
                  <h2 className="h-[20px] text-[30px]">{slide.valorpacote}</h2>
                </div>
              </div>
              <div className="bg-[#62357F] rounded-bl-[44px] rounded-br-[44px] p-8 flex justify-center items-center text-white font-bold">
                <h1 className="text-[2em] ">ASSINE</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrossel2;
