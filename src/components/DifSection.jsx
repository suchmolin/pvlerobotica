import imgdata1 from '../assets/img/BARCO.png'
import imgdata2 from '../assets/img/CARITA.png'
import imgdata3 from '../assets/img/LETRAS2.png'
import imgdata4 from '../assets/img/TREN.png'
import imgdata5 from '../assets/img/RULETA.png'
import imgdata6 from '../assets/img/CIUDAD.png'

export default function DifSection() {
  const data = [
    {
      id: 'navegando-con-legos',
      icon: imgdata1,
      titulo: 'NAVEGANDO CON LEGOS',
    },
    {
      id: 'caritas-que-hablan',
      icon: imgdata2,
      titulo: 'CARITAS QUE HABLAN',
    },
    {
      id: 'palabras-magicas',
      icon: imgdata3,
      titulo: 'PALABRAS MÁGICAS',
    },
    {
      id: 'codificacion-con-colores',
      icon: imgdata4,
      titulo: 'CODIFICANDO CON COLORES',
    },
    {
      id: 'parque-de-aventuras',
      icon: imgdata5,
      titulo: 'PARQUE DE AVENTURAS',
    },
    {
      id: 'mi-ciudad-feliz',
      icon: imgdata6,
      titulo: 'MI CIUDAD FELIZ',
    },
  ]
  return (
    <section className="w-full flex justify-center bg-[#d21080] py-5">
      <div className="w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex justify-center">
        <div className="w-11/12 flex justify-center md:justify-between  flex-wrap md:flex-nowrap gap-y-4 gap-x-7">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[200px] md:w-[130px] lg:w-[150px] xl:w-[180px] flex flex-col items-center"
            >
              <div className="w-8/12 flex justify-center ">
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
