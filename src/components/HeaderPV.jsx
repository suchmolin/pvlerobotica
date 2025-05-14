import { MdPlayCircleOutline } from 'react-icons/md'
import headerimg from '../assets/img/spike-essential.png'
import legobg from '../assets/img/LEGObg.png'
import logovertical from '../assets/img/logoVertical.png'

export default function HeaderPV() {
  return (
    <section
      style={{
        background: `url(${legobg})`,
        backgroundColor: '#fff',
        backgroundSize: '33px',
      }}
      className="w-full flex justify-center pt-[100px] pb-12 relative"
    >
      <img
        src={logovertical}
        alt="logo lerobotica"
        className="absolute top-12 right-[2%] w-[90px] h-auto bg-white rounded-b-[35px]"
      />
      <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] monserrat-bold">
        {/*///TITULO//*/}
        <h1 className="text-center text-7xl text-[#f7b503] ">
          PLAN <span className="text-[#d21080]">VACACIONAL</span>
        </h1>
        <h2 className="text-center text-4xl text-[#00aabc]">
          CARACAS Y PUERTO ORDAZ
        </h2>
        {/*///IMAGEN Y VIDEO//*/}
        <div className="w-full flex gap-20 items-center justify-center">
          <img src={headerimg} alt="spike essential" className="w-1/2 h-auto" />
          <div className="w-5/12 aspect-video rounded-4xl flex items-center justify-center bg-[#696969]">
            <MdPlayCircleOutline className="text-8xl text-[#bdc5d4]" />
          </div>
        </div>
        {/*///SLOGAN//*/}
        <h3 className="text-4xl text-[#2d2d2d] text-center">
          Diviértete y Aprende Robótica y Programación
        </h3>
      </div>
    </section>
  )
}
