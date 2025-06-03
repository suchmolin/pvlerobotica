import imgdata1 from '../assets/img/carrera.png'
import imgdata2 from '../assets/img/brazorobotico.png'
import imgdata3 from '../assets/img/lentes.png'
import imgdata4 from '../assets/img/obstaculos.png'
import imgdata5 from '../assets/img/giros.png'
import imgdata6 from '../assets/img/ascensor.png'
import camion from '../assets/img/camion.png'
import codigo from '../assets/img/codigo.png'
import pesas from '../assets/img/pesas.png'
import detective from '../assets/img/detective.png'

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
      id: 'SUPER-VEHICULO',
      icon: camion,
      titulo: 'SUPER VEHICULO',
    },
    {
      id: 'procesa-pistas-cn-codigo',
      icon: codigo,
      titulo: 'PROCESA PISTAS CON CODIGOS',
    },
    {
      id: 'robot-en-el-gym',
      icon: pesas,
      titulo: 'ROBOT EN EL GYM',
    },
    {
      id: 'robot-detective',
      icon: detective,
      titulo: 'robot-detective',
    },
    {
      id: 'ascensor-automatico',
      icon: imgdata6,
      titulo: 'ASCENSOR AUTOMÁTICO',
    },
  ]
  return (
    <section className="w-full flex justify-center bg-[#007a03] py-5">
      <div className="w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex justify-center">
        <div className="w-11/12 flex justify-center  flex-wrap gap-y-4 gap-x-5 sm:gap-x-15">
          {data.map((item, i) => (
            <div
              key={item.id}
              className="w-[150px] sm:w-[60px] md:w-[90px] lg:w-[130px] xl:w-[180px] flex flex-col items-center"
            >
              <div className="w-8/12 flex justify-center ">
                <img
                  src={item.icon}
                  alt={item.titulo}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[#f7b503] font-bold">DÍA {i + 1}</p>
                <p className="text-white text-xs sm:text-[8px] md:text-[10px] lg:text-xs xl:text-base text-center monserrat-bold leading-5">
                  {item.titulo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
