import imgdata1 from '../assets/img/carrera.png'
import imgdata2 from '../assets/img/brazorobotico.png'
import imgdata3 from '../assets/img/lentes.png'
import imgdata4 from '../assets/img/obstaculos.png'
import imgdata5 from '../assets/img/giros.png'
import imgdata6 from '../assets/img/ascensor.png'

export default function DifSectionCuatro() {
  const data = [
    {
      id: 'desafio-de-velocidad',
      icon: imgdata1,
      titulo: 'DESAFÍO DE VELOCIDAD',
    },
    {
      id: 'brazo-robotico',
      icon: imgdata2,
      titulo: 'BRAZO ROBÓTICO',
    },
    {
      id: 'realidad-aumentada',
      icon: imgdata3,
      titulo: 'REALIDAD AUMENTADA',
    },
    {
      id: 'esquiva-y-avanza',
      icon: imgdata4,
      titulo: 'ESQUIVA Y AVANZA',
    },
    {
      id: 'giros-perfectos',
      icon: imgdata5,
      titulo: 'GIROS PERFECTOS',
    },
    {
      id: 'ascensor-automatico',
      icon: imgdata6,
      titulo: 'ASCENSOR AUTOMÁTICO',
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
