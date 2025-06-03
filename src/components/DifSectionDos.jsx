import imgdata1 from '../assets/img/F1.png'
import imgdata2 from '../assets/img/videojuego.png'
import imgdata3 from '../assets/img/robot.png'
import imgdata4 from '../assets/img/velero.png'
import imgdata5 from '../assets/img/construccion.png'
import imgdata6 from '../assets/img/construccion.png'
import maquina from '../assets/img/maquina.png'
import rampa from '../assets/img/rampa.png'
import copa from '../assets/img/copa.png'

export default function DifSectionDos() {
  const data = [
    {
      id: 'carrera-de-legos',
      icon: imgdata1,
      titulo: 'CARRERA DE LEGOS',
    },
    {
      id: 'crea-un-videojuego',
      icon: imgdata2,
      titulo: 'CREA UN VIDEOJUEGO',
    },
    {
      id: 'robots-en-movimiento',
      icon: imgdata3,
      titulo: 'ROBOTS EN MOVIMIENTO',
    },
    {
      id: 'ensambla-un-velero',
      icon: imgdata4,
      titulo: 'ENSAMBLA UN VELERO',
    },
    {
      id: 'aterriza-el-helicortero',
      icon: imgdata5,
      titulo: 'ATERRIZA UN HELICORTERO',
    },
    {
      id: 'defafio-de-la-torre',
      icon: imgdata6,
      titulo: 'DEFAFÍO DE LA TORRE',
    },
    {
      id: 'jugando-con-movimiento',
      icon: imgdata6,
      titulo: 'JUGANDO CON MOVIMIENTO',
    },
    {
      id: 'maquinas-divertidas',
      icon: maquina,
      titulo: 'MQUINAS DIVERTIDAS',
    },
    {
      id: 'reto-de-rampas',
      icon: rampa,
      titulo: 'RETO DE RAMPAS',
    },
    {
      id: 'mini-torneo-con-legos',
      icon: copa,
      titulo: 'MINI TORNEO CON LEGOS',
    },
  ]
  return (
    <section className="w-full flex justify-center bg-[#005aad] py-5">
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
