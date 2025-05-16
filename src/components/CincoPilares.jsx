import imgdata1 from '../assets/img/EXPLORA.png'
import imgdata2 from '../assets/img/DIVIERTETE.png'
import imgdata3 from '../assets/img/CONSTRUYE.png'
import imgdata4 from '../assets/img/Sin título-6.png'
import imgdata5 from '../assets/img/COMPETIR.png'
import logolero from '../assets/img/logo.png'
import legobg from '../assets/img/LEGObg.png'

export default function CincoPilares() {
  const data = [
    {
      id: 'descubre-pilar',
      icon: imgdata1,
      titulo: 'DESCUBRE',
    },
    {
      id: 'diviertete-pilar',
      icon: imgdata2,
      titulo: 'DIVIÉRTETE',
    },
    {
      id: 'construye-pilar',
      icon: imgdata3,
      titulo: 'CONSTRUYE',
    },
    {
      id: 'programa-pilar',
      icon: imgdata4,
      titulo: 'PROGRAMA',
    },
    {
      id: 'compite-pilar',
      icon: imgdata5,
      titulo: 'COMPITE',
    },
  ]
  return (
    <section
      style={{
        background: `url(${legobg})`,
        backgroundColor: '#fff',
        backgroundSize: '33px',
      }}
      className="w-full flex justify-center py-10 md:py-14 monserrat-bold "
    >
      <div className="w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex flex-col md:flex-row justify-center items-center">
        <div className="w-10/12 md:w-4/12 lg:pr-20 lg:pl-10 xl:pl-0 flex flex-col items-center md:items-start text-center lg:text-start mb-10 md:mb-0">
          <h3 className="text-base xl:text-lg text-nowrap">
            UNA EXPERIENCIA TECNOLÓGICA <br /> Y DIVERTIDA BASADA EN
          </h3>
          <h2 className="text-3xl flex flex-col gap-1 text-white items-center lg:items-start">
            <span className="bg-[#00aabc] px-5 py-2 w-fit">5 PILARES</span>
            <span className="bg-[#d21080] px-5 py-2 w-fit">FUNDAMENTALES</span>
          </h2>
        </div>
        <div className="w-11/12 md:w-8/12 flex flex-col gap-3 sm:gap-6 items-center">
          <div className="w-full flex justify-center sm:gap-y-5 flex-wrap">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-[220px] sm:w-[130px] lg:w-[130px] xl:w-[160px] flex flex-col sm:gap-3"
              >
                <div className="w-full px-5">
                  <img
                    src={item.icon}
                    alt={item.titulo}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-[#2d2d2d] text-base text-center  leading-5">
                  {item.titulo}
                </p>
              </div>
            ))}
          </div>
          <img
            src={logolero}
            alt="logo lerobotica"
            className="w-[400px] h-auto"
          />
        </div>
      </div>
    </section>
  )
}
