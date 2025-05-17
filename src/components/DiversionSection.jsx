import imgdata1 from '../assets/img/semanas.png'
import imgdata2 from '../assets/img/horas.png'
import imgdata3 from '../assets/img/grupos.png'
import imgdata4 from '../assets/img/tematicos.png'
import imgdata5 from '../assets/img/acceso.png'
import imgdata6 from '../assets/img/profesores.png'
import legobg from '../assets/img/LEGObg.png'

export default function DiversionSection() {
  const data = [
    {
      id: '2-o-4-semanas-de-actividades',
      icon: imgdata1,
      titulo: '2 O 4 SEMANAS DE ACTIVIDADES',
    },
    {
      id: '30-horas-de-diversion',
      icon: imgdata2,
      titulo: '30 HORAS DE DIVERSIÓN',
    },
    {
      id: 'grupos-reducidos',
      icon: imgdata3,
      titulo: 'GRUPOS REDUCIDOS',
    },
    {
      id: 'espacios-tematicos',
      icon: imgdata4,
      titulo: 'ESPACIOS TEMÁTICOS',
    },
    {
      id: 'facil-acceso',
      icon: imgdata5,
      titulo: 'FÁCIL ACCESO',
    },
    {
      id: 'profesores-capacitados',
      icon: imgdata6,
      titulo: 'PROFESORES CAPACITADOS',
    },
  ]
  return (
    <section
      style={{
        background: `url(${legobg})`,
        backgroundColor: '#e8eef9',
        backgroundSize: '33px',
      }}
      className="w-full flex justify-center bg-[url('img/lanfondo.png')] py-14"
    >
      <div className="w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex flex-col items-center">
        <div className="flex flex-col gap-2 sm:gap-5 mb-14">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl monserrat-bold text-white flex flex-col sm:flex-row gap-1 sm:gap-4 items-center justify-center">
            <span className="bg-[#007a03] py-1 px-3">LEGOS</span>
            <span className="bg-[#f7b503] px-3 text-lg sm:text-3xl lg:text-4xl h-fit">
              +
            </span>
            <span className="bg-[#00aabc] py-1 px-3">ROBÓTICA</span>
          </h2>
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl monserrat-bold text-white flex flex-col sm:flex-row gap-1 sm:gap-4 items-center justify-center">
            <span className="bg-[#f7b503] px-3 text-lg sm:text-3xl lg:text-4xl h-fit ">
              +
            </span>
            <span className="bg-[#d21080] py-1 px-3">PROGRAMACIÓN</span>
            <span className="bg-[#f7b503] px-3 text-lg sm:text-3xl lg:text-4xl h-fit">
              =
            </span>
          </h2>
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl monserrat-bold text-white flex flex-col sm:flex-row gap-1 sm:gap-4 items-center justify-center">
            <span className="bg-[#005aad] py-1 px-3">VACACIONES</span>
            <span className="bg-[#007a03] py-1 px-3">DIVERTIDAS</span>
          </h2>
        </div>
        <div className="w-full flex justify-center sm:justify-between flex-wrap sm:flex-nowrap gap-y-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[140px] sm:w-[100px] lg:w-[150px] flex flex-col gap-5"
            >
              <div className="relative w-full h-[80px] lg:h-[100px] flex justify-center">
                <img
                  src={item.icon}
                  alt={item.titulo}
                  className="h-full w-auto"
                />
              </div>
              <p className="text-[#2d2d2d] text-sm lg:text-sm xl:text-xl text-center monserrat-bold leading-5">
                {item.titulo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
