import { MdPlayCircleOutline } from 'react-icons/md'
import logovertical from '../assets/img/logoVertical.png'
import spikeprime10 from '../assets/img/spikeprime10.png'
import legobg from '../assets/img/LEGObg.png'
import video from '../assets/img/PrimariaAlta.mp4'
import poster from '../assets/img/PRIMARIAALTA.png'

export default function PrimariaAltaSection() {
  return (
    <section
      style={{
        background: `url(${legobg})`,
        backgroundColor: '#e8eef9',
        backgroundSize: '33px',
      }}
      className="w-full flex flex-col justify-center monserrat-bold bg-[#e8eef9] bg-[url('/lanfondo.png')] bg-cover bg-center  relative pt-7 pb-7 lg:pb-10"
    >
      <img
        src={logovertical}
        alt="logo lerobotica"
        className="absolute top-0 left-[2%] w-[90px] h-auto bg-white rounded-b-[35px]"
      />
      <div className="w-full flex flex-col md:flex-row justify-end md:hidden items-end md:items-center md:gap-4 mb-7 pr-3 sm:pr-10 md:pr-0">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#00aabc] text-nowrap">
          PRIMARIA ALTA
        </h2>
        <h3 className="text-[#007a03] text-lg lg:text-xl xl:text-2xl  text-nowrap">
          9 A 11 AÑOS
        </h3>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-end">
          <div className="w-11/12 md:w-6/12 flex flex-col justify-center md:pl-10">
            <div className=" hidden md:flex items-center gap-4 mb-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#00aabc] text-nowrap">
                PRIMARIA ALTA
              </h2>
              <h3 className="text-[#007a03] text-lg lg:text-xl xl:text-2xl  text-nowrap">
                9 A 11 AÑOS
              </h3>
            </div>
            <div className="w-full flex flex-col gap-4 mb-5">
              <video
                className="w-full md:w-10/12 aspect-video rounded-4xl flex items-center justify-center bg-[#696969]"
                controls
                src={video}
                poster={poster}
              ></video>
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl text-[#dd1f89] text-center md:text-start mb-5 sm:mb-0">
              ¡Robots y mucha acción!
            </h2>
          </div>
          <div className="w-11/12 md:w-5/12 flex items-center justify-center ">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full flex justify-end relative">
                <img
                  src={spikeprime10}
                  alt="spike essential"
                  className="object-contain object-right"
                />
              </div>
              <button className="bg-[#00aabc] py-2 lg:py-4 px-5 lg:px-10 text-xl lg:text-2xl xl:text-3xl text-white text-center rounded-4xl  -ml-20 hidden md:block">
                ¡INSCRÍBETE AHORA!
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-[#00aabc] py-2 lg:py-4 px-5 lg:px-10 text-xl lg:text-2xl xl:text-3xl text-white text-center rounded-4xl  block md:hidden ">
            ¡INSCRÍBETE AHORA!
          </button>
        </div>
      </div>
    </section>
  )
}
