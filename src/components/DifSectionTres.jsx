import imgdata1 from '../assets/img/escala.png'
import imgdata2 from '../assets/img/reto.png'
import imgdata3 from '../assets/img/eco.png'
import imgdata4 from '../assets/img/avion.png'
import imgdata5 from '../assets/img/ingeniero.png'
import imgdata6 from '../assets/img/carro.png'
import labeeinto from '../assets/img/labeeinto.png'
import catapulta from '../assets/img/catapulta.png'
import distancia from '../assets/img/distancia.png'
import robotbaila from '../assets/img/robotbaila.png'

export default function DifSectionTres() {
  const data = [
    {
      id: 'construye-y-escala',
      icon: imgdata1,
      titulo: 'CONSTRUYE Y ESCALA',
    },
    {
      id: 'reto-ingenioso',
      icon: imgdata2,
      titulo: 'RETO INGENIOSO',
    },
    {
      id: 'eco-misiones',
      icon: imgdata3,
      titulo: 'ECO MISIONES',
    },
    {
      id: 'listos-para-el-despegue',
      icon: imgdata4,
      titulo: 'LISTOS PARA EL DESPEGUE',
    },
    {
      id: 'ingenieros-en-accion',
      icon: imgdata5,
      titulo: 'INGENIEROS EN ACCIÓN',
    },
    {
      id: 'super-vehiculos',
      icon: imgdata6,
      titulo: 'SUPER VEHÍCULOS',
    },
    {
      id: 'robot-en-el-laberinto',
      icon: labeeinto,
      titulo: 'ROBOT EN EL LABERINTO',
    },
    {
      id: 'la-catapulta-perfecta',
      icon: catapulta,
      titulo: 'LA CATAPULTA PERFECTA',
    },
    {
      id: 'calcula-la-distancia',
      icon: distancia,
      titulo: 'CALCULA LA DISTANCIA',
    },
    {
      id: 'baila-con-el-robot',
      icon: robotbaila,
      titulo: 'BAILA CON EL ROBOT',
    },
  ]
  return (
    <section className="w-full flex justify-center bg-[#00aabc] py-5">
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
