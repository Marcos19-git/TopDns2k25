function Error404() {
  return (
    <div className="overflow-x-hidden">
      <div className="w-[100vw] h-[100vh] justify-center flex items-center">
        <div className="grid">
          <h1 className="text-[clamp(2em,3.2vw,3.2em)] flex text-center justify-center font-ArabotoMedium text-blue-600 ">
            Error404
          </h1>
          <a href="https://novo.topdns.com.br/">
            <button className="pr-[20px] bg-blue-600  p-2 text-[1.3em] font-bold rounded-[10px] text-white pl-[20px]">
              Voltar para Inicio
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error404;
