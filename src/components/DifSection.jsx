import imgdata1 from '../assets/img/BARCO.png'
import imgdata2 from '../assets/img/CARITA.png'
import imgdata3 from '../assets/img/LETRAS2.png'
import imgdata4 from '../assets/img/TREN.png'
import imgdata5 from '../assets/img/RULETA.png'
import imgdata6 from '../assets/img/CIUDAD.png'
import SAFARI from '../assets/img/SAFARI.png'
import CARRO2 from '../assets/img/CARRO2.png'
import piezasmecanicas from '../assets/img/piezasmecanicas.png'

export default function DifSection() {
  const data = [
    {
      id: 'navegando-con-legos',
      icon: imgdata1,
      titulo: 'NAVEGANDO CON LEGOS',
    },
    {
      id: 'mi-ciudad-feliz',
      icon: imgdata6,
      titulo: 'MI CIUDAD FELIZ',
    },
    {
      id: 'palabras-magicas',
      icon: imgdata3,
      titulo: 'PALABRAS MÁGICAS',
    },
    {
      id: 'parque-de-aventuras',
      icon: imgdata5,
      titulo: 'PARQUE DE AVENTURAS',
    },
    {
      id: 'codificacion-con-colores',
      icon: imgdata4,
      titulo: 'CODIFICANDO CON COLORES',
    },
    {
      id: 'caritas-que-hablan',
      icon: imgdata2,
      titulo: 'CARITAS QUE HABLAN',
    },
    {
      id: 'el-castillo-mas-alto',
      icon: imgdata2,
      titulo: 'EL CASTILLO MÁS ALTO',
    },
    {
      id: 'safari-aventurero',
      icon: SAFARI,
      titulo: 'SAFARI AVENTURERO',
    },
    {
      id: 'super-vehiculos',
      icon: CARRO2,
      titulo: 'SUPER VEHICULOS EN LA PISTA',
    },
    {
      id: 'piezas-mecanicas',
      icon: piezasmecanicas,
      titulo: 'PIEZAS MECÁNICAS',
    },
  ]
  return (
    <section className="w-full flex justify-center bg-[#d21080] py-5">
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
