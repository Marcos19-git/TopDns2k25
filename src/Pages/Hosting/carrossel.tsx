import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css/pagination";
import "./index";

function Carrossel() {
  const slides = [
    {
      titulo: " BÁSICO",
      vantagens: {
        "ESPAÇO EM DISCO": "10GB",
        "TRÁFEGO MENSAL": "50GB",
        "BANCO DE DADOS": "1",
        "CONTAS DE E-MAIL": "DISPONÍVEL",
        DOMÍNIOS: "10",
        SERVIDOR: "MANUAL",
        ANTIVÍRUS: "99,9%",
        "NAO DISPONÍVEL": "-",
      },
      preco: "19,90",
    },
    {
      titulo: "MEDIO",
      vantagens: {
        "ESPAÇO EM DISCO": "50GB",
        "TRÁFEGO MENSAL": "100GB",
        "BANCO DE DADOS": "3",
        "CONTAS DE E-MAIL": "DISPONÍVEL",
        DOMÍNIOS: "20",
        SERVIDOR: "AUTOMÁTICO",
        ANTIVÍRUS: "99,9%",
        "NAO DISPONÍVEL": "-",
      },
      preco: "39,90",
    },
    {
      titulo: "AVANÇADO",
      vantagens: {
        "ESPAÇO EM DISCO": "150GB",
        "TRÁFEGO MENSAL": "ILIMITADO",
        "BANCO DE DADOS": "ILIMITADO",
        "CONTAS DE E-MAIL": "ILIMITADAS",
        DOMÍNIOS: "ILIMITADOS",
        SERVIDOR: "AUTOMÁTICO",
        ANTIVÍRUS: "100%",
        "NAO DISPONÍVEL": "-",
      },
      preco: "69,90",
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
              <div className="flex bg-purple-900 h-[120px] rounded-tr-[44px] w-full  rounded-tl-[44px]">
                <div className="bg-purple-900 rounded-[44px] w-[44vw]  p-3  text-center text-white font-bold  flex justify-center items-center">
                  <h2 className="text-[0.9rem]">
                    CONFIRA AS FERRAMENTAS <br /> E VANTAGENS DOS PLANOS
                  </h2>
                </div>

                <div className="bg-[#FF7800] rounded-l-[40px]  w-full rounded-tr-[40px] p-4 grid  text-center text-white font-bold ">
                  <h1 className="text-lg  h-[2px] mt-[10px] md:text-xl">TOP</h1>
                  <h2 className="text-[1.4em] h-[30px] md:text-3xl">
                    {slide.titulo}
                  </h2>
                </div>
              </div>
              {Object.entries(slide.vantagens).map(([key, value], idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[1fr_1fr] border-b border-gray-300  text-sm md:text-base font-semibold text-black"
                >
                  <span className="p-2 h-full pr-4 border-r border-gray-300">
                    {key}
                  </span>
                  <span className="pr-4 justify-end flex  items-center text-gray-400">
                    {value}
                  </span>
                </div>
              ))}

              <div className="bg-purple-950 rounded-bl-[44px] rounded-br-[44px] p-8 flex justify-between items-center text-white font-bold">
                <h1 className="text-xl  text-[2.2em]">VALORES</h1>
                <div className="flex   items-center pl-[15px] text-[25px]">
                  R${slide.preco}
                  <span className="text-sm ml-[4px]  mt-[4px]  w-[50px]">
                    /mês
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrossel;
