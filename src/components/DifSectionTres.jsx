import imgdata1 from '../assets/img/vwrwrgfwr.png'
import imgdata2 from '../assets/img/LAPTOP.png'
import imgdata3 from '../assets/img/PENSA.png'
import imgdata4 from '../assets/img/CONFIANZA.png'
import imgdata5 from '../assets/img/METAS.png'

export default function DifSectionTres() {
  const data = [
    {
      id: 'python-basico',
      icon: imgdata1,
      titulo: 'PYTHON BASICO',
    },
    {
      id: 'logica-computacional',
      icon: imgdata2,
      titulo: 'LÓGICA COMPUTACIONAL EN ACCIÓN',
    },
    {
      id: 'desarrollo-del-pensamiento-critico',
      icon: imgdata3,
      titulo: 'DESARROLLO DEL PENSAMIENTO CRÍTICO',
    },
    {
      id: 'confianza-y-resiliencia',
      icon: imgdata4,
      titulo: 'CONFIANZA Y RESILIENCIA',
    },
    {
      id: 'mejora-en-la-resolucion-de-problemas',
      icon: imgdata5,
      titulo: 'MEJORA EN LA RESOLUCIÓN DE PROBLEMAS',
    },
  ]
  return (
    <section className="w-full flex justify-center bg-[#007a03] py-10">
      <div className="w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex justify-center ">
        <div className="w-11/12 flex justify-center md:justify-between  flex-wrap md:flex-nowrap gap-y-4 gap-x-7">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[200px] md:w-[130px] lg:w-[150px] xl:w-[180px] flex flex-col items-center"
            >
              <div className="w-full px-5">
                <img
                  src={item.icon}
                  alt={item.titulo}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-white text-lg md:text-[10px] lg:text-xs xl:text-base text-center monserrat-bold leading-5 mt-3">
                {item.titulo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
