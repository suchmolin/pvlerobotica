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
      className="w-full flex flex-col items-center monserrat-bold pt-10 lg:pt-0 pb-10"
    >
      <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex gap-10 justify-center">
        <div className="w-5/12 relative">
          <img
            src={legocruz}
            alt="lego cruz pilares"
            className="w-full h-auto"
          />
        </div>
        <div className="w-6/12 lg:w-5/12 xl:w-4/12 flex items-center">
          <h2 className="text-white text-3xl lg:text-4xl flex flex-col gap-2">
            <span className="p-2 bg-[#007a03] w-fit ml-10">BASADO EN EL</span>
            <span className="p-2 bg-[#f7b503] w-fit ml-32">SISTEMA DE</span>
            <span className="p-2 bg-[#00aabc] w-fit ">APRENDIZAJE</span>
            <span className="p-2 bg-[#d21080] w-fit ml-54">LEGO</span>
          </h2>
        </div>
      </div>
      <div className="w-full flex gap-4 justify-center items-center mt-10 lg:mt-0">
        <h3 className="text-[#007a03] text-3xl">+43 años de experiencia</h3>
        <img
          src={legologo}
          alt="Lego education logo"
          className="w-[200px] h-auto"
        />
      </div>
    </section>
  )
}
