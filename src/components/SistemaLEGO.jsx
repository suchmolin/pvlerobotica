import legobg from '../assets/img/LEGObg.png'
import legocruz from '../assets/img/legocruz.png'
import legologo from '../assets/img/legologo.png'

export default function SistemaLEGO() {
  return (
    <section
      style={{
        background: `url(${legobg})`,
        backgroundColor: '#fff',
        backgroundSize: '33px',
      }}
      className="w-full flex flex-col items-center monserrat-bold md:pt-10  pb-10"
    >
      <div className="w-[325px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex flex-col md:flex-row md:gap-10 justify-center items-center md:items-start">
        <div className="w-11/12 sm:w-10/12 md:w-5/12 relative">
          <img
            src={legocruz}
            alt="lego cruz pilares"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full sm:w-10/12 md:w-6/12 lg:w-5/12 xl:w-4/12 flex justify-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl flex flex-col sm:items-center md:items-start sm:gap-2">
            <span className="p-2 bg-[#007a03] w-fit ml-0 sm:ml-10">
              BASADO EN EL
            </span>
            <span className="p-2 bg-[#f7b503] w-fit ml-20 sm:ml-32">
              SISTEMA DE
            </span>
            <span className="p-2 bg-[#00aabc] w-fit ">APRENDIZAJE</span>
            <span className="p-2 bg-[#d21080] w-fit ml-30 sm:ml-54">LEGO</span>
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center mt-10 lg:mt-0">
        <h3 className="text-[#007a03] text-3xl text-center sm:text-start">
          +43 años de experiencia
        </h3>
        <img
          src={legologo}
          alt="Lego education logo"
          className="w-[200px] h-auto"
        />
      </div>
    </section>
  )
}
