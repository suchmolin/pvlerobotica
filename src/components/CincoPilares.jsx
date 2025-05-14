import imgdata1 from '../assets/img/EXPLORA.png'
import imgdata2 from '../assets/img/DIVIERTETE.png'
import imgdata3 from '../assets/img/CONSTRUYE.png'
import imgdata4 from '../assets/img/Sin título-6.png'
import imgdata5 from '../assets/img/COMPETIR.png'
import logolero from '../assets/img/logo.png'
import fondoLego from '../assets/img/lanfondo.png'

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
      style={{ background: `url(${fondoLego})` }}
      className="w-full flex justify-center py-14 monserrat-bold "
    >
      <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex justify-center items-center">
        <div className="w-4/12 lg:pr-20 lg:pl-10 xl:pl-0">
          <h3 className="text-base xl:text-lg text-nowrap">
            UNA EXPERIENCIA TECNOLÓGICA <br /> Y DIVERTIDA BASADA EN
          </h3>
          <h2 className="text-3xl flex flex-col gap-1  text-white">
            <span className="bg-[#00aabc] px-5 py-2 w-fit">5 PILARES</span>
            <span className="bg-[#d21080] px-5 py-2 w-fit">FUNDAMENTALES</span>
          </h2>
        </div>
        <div className="w-8/12 flex flex-col gap-6 items-center">
          <div className="w-full flex justify-center gap-y-5 flex-wrap">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-[130px] lg:w-[130px] xl:w-[160px] flex flex-col gap-3"
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
