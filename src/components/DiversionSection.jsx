import imgdata1 from '../assets/img/semanas.png'
import imgdata2 from '../assets/img/horas.png'
import imgdata3 from '../assets/img/grupos.png'
import imgdata4 from '../assets/img/tematicos.png'
import imgdata5 from '../assets/img/acceso.png'
import imgdata6 from '../assets/img/profesores.png'
import fondoLego from '../assets/img/lanfondo.png'

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
      style={{ background: `url(${fondoLego})` }}
      className="w-full flex justify-center bg-[url('img/lanfondo.png')] py-14"
    >
      <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex flex-col items-center">
        <div className="flex flex-col gap-5 mb-14">
          <h2 className="text-4xl lg:text-5xl monserrat-bold text-white flex gap-4 items-center justify-center">
            <span className="bg-[#007a03] py-1 px-3">LEGOS</span>
            <span className="bg-[#f7b503] px-3 text-3xl lg:text-4xl h-fit">
              +
            </span>
            <span className="bg-[#00aabc] py-1 px-3">ROBÓTICA</span>
          </h2>
          <h2 className="text-4xl lg:text-5xl monserrat-bold text-white flex gap-4 items-center justify-center">
            <span className="bg-[#f7b503] px-3 text-3xl lg:text-4xl h-fit">
              +
            </span>
            <span className="bg-[#d21080] py-1 px-3">PROGRAMACIÓN</span>
            <span className="bg-[#f7b503] px-3 text-3xl lg:text-4xl h-fit">
              =
            </span>
            <span className="bg-[#00aabc] py-1 px-3">DIVERSIÓN</span>
          </h2>
        </div>
        <div className="w-11/12 flex justify-between">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[150px] xl:w-[180px] flex flex-col gap-5"
            >
              <div className="w-full px-5">
                <img
                  src={item.icon}
                  alt={item.titulo}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-[#2d2d2d] text-xs lg:text-sm xl:text-xl text-center monserrat-bold leading-5">
                {item.titulo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
