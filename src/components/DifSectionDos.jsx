import imgdata1 from '../assets/img/Imagen1.png'
import imgdata2 from '../assets/img/ENGRANAJE.png'
import imgdata3 from '../assets/img/EMPA.png'
import imgdata4 from '../assets/img/CONVER.png'
import imgdata5 from '../assets/img/MATE.png'

export default function DifSectionDos() {
  const data = [
    {
      id: 'metodologia-steam',
      icon: imgdata1,
      titulo: 'METODOLOGÍA STEAM',
    },
    {
      id: 'conocimientos-de-matematicas',
      icon: imgdata2,
      titulo: 'CONOCIMIENTOS DE MATEMÁTICAS',
    },
    {
      id: 'habilidades-socioemocionales',
      icon: imgdata3,
      titulo: 'HABILIDADES SOCIOEMOCIONALES',
    },
    {
      id: 'trabajo-en-equipo',
      icon: imgdata4,
      titulo: 'TRABAJO EN EQUIPO',
    },
    {
      id: 'conocimientos-de-lectoescritura',
      icon: imgdata5,
      titulo: 'CONOCIMIENTOS EN LECTOESCRITURA',
    },
  ]
  return (
    <section className="w-full flex justify-center bg-[#005aad] py-10">
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
