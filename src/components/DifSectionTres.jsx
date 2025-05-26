import imgdata1 from '../assets/img/escala.png'
import imgdata2 from '../assets/img/reto.png'
import imgdata3 from '../assets/img/eco.png'
import imgdata4 from '../assets/img/avion.png'
import imgdata5 from '../assets/img/ingeniero.png'
import imgdata6 from '../assets/img/carro.png'

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
  ]
  return (
    <section className="w-full flex justify-center bg-[#00aabc] py-10">
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
