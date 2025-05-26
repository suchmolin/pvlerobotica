import { MdPlayCircleOutline } from 'react-icons/md'
import logovertical from '../assets/img/logoVertical.png'
import mano from '../assets/img/mano.png'
import legobg from '../assets/img/LEGObg.png'
import video from '../assets/img/secundaria.mp4'
import poster from '../assets/img/SECUNDARIA.png'

export default function SecundariaSection() {
  return (
    <section
      style={{
        background: `url(${legobg})`,
        backgroundColor: '#e8eef9',
        backgroundSize: '33px',
      }}
      className="w-full flex flex-col md:flex-row justify-center monserrat-bold bg-[#e8eef9] bg-[url('/lanfondo.png')] bg-cover bg-center py-12 relative"
    >
      <div className="w-full flex flex-col sm:flex-row md:hidden items-end md:items-center justify-start sm:justify-end md:justify-start sm:gap-4 mb-7 pr-10 md:pr-0">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#dd1f89] text-nowrap">
          SECUNDARIA
        </h2>
        <h3 className="text-[#00aabc] text-lg lg:text-xl xl:text-2xl  text-nowrap">
          12 A 14 AÑOS
        </h3>
      </div>
      <img
        src={logovertical}
        alt="logo lerobotica"
        className="absolute top-0 left-[2%] w-[90px] h-auto bg-white rounded-b-[35px]"
      />
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
          <div className=":w-11/12 md:w-6/12 flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center -mt-20 md:mt-0">
              <div className="w-full flex justify-start relative">
                <img
                  src={mano}
                  alt="spike essential"
                  className="object-contain object-right"
                />
              </div>
              <button className="bg-[#dd1f89] py-2 lg:py-4 px-5 lg:px-10 text-xl lg:text-2xl xl:text-3xl text-white text-center rounded-4xl  md:-ml-20 -mt-10 hidden md:block">
                ¡INSCRÍBETE AHORA!
              </button>
            </div>
          </div>
          <div className="w-full md:w-6/12 flex flex-col justify-center">
            <div className="hidden md:flex items-center gap-4 mb-7">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#dd1f89] text-nowrap">
                SECUNDARIA
              </h2>
              <h3 className="text-[#00aabc] text-lg lg:text-xl xl:text-2xl  text-nowrap">
                12 A 14 AÑOS
              </h3>
            </div>
            <div className="w-full flex flex-col gap-4 mb-5 items-center md:items-start sm:-mt-10 md:mt-0">
              <video
                className="w-10/12 aspect-video rounded-4xl flex items-center justify-center bg-[#696969]"
                controls
                src={video}
                poster={poster}
              ></video>
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-5xl text-[#005aad] text-center md:text-start mb-20 md:mb-0">
              ¡Aquí se programa en otro <br /> nivel con Phyton!
            </h2>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-[#dd1f89] py-2 lg:py-4 px-5 lg:px-10 text-xl lg:text-2xl xl:text-3xl text-white text-center rounded-4xl  md:-ml-20 -mt-10 block md:hidden">
            ¡INSCRÍBETE AHORA!
          </button>
        </div>
      </div>
    </section>
  )
}
