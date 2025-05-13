import imgdata1 from '../assets/img/qweqwe.png'
import imgdata2 from '../assets/img/qweqwe.png'
import imgdata3 from '../assets/img/qweqwe.png'
import imgdata4 from '../assets/img/qweqwe.png'
import imgdata5 from '../assets/img/qweqwe.png'
import logolero from '../assets/img/logo.png'

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
    <section className="w-full flex justify-center bg-[url('img/lanfondo.png')] py-14 monserrat-bold ">
      <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex items-center">
        <div className="w-5/12 pr-20">
          <h3 className="text-lg">
            UNA EXPERIENCIA TECNOLÓGICA <br /> Y DIVERTIDA BASADA EN
          </h3>
          <h2 className="text-3xl flex flex-col gap-1  text-white">
            <span className="bg-[#00aabc] px-5 py-2 w-fit">5 PILARES</span>
            <span className="bg-[#d21080] px-5 py-2 w-fit">FUNDAMENTALES</span>
          </h2>
        </div>
        <div className="w-7/12 flex flex-col gap-10 items-center">
          <div className="w-full flex justify-between">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-[150px] xl:w-[180px] flex flex-col gap-5"
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
