import { MdPlayCircleOutline } from 'react-icons/md'
import logovertical from '../assets/img/logoVertical.png'
import spikeessentialaventura from '../assets/img/spikeessentialaventura.png'
import legobg from '../assets/img/LEGObg.png'
import video from '../assets/img/PrimariaBaja.mp4'
import poster from '../assets/img/PRIMARIABAJA.png'

export default function PrimariaBajaSection() {
  return (
    <section
      style={{
        background: `url(${legobg})`,
        backgroundColor: '#e8eef9',
        backgroundSize: '33px',
      }}
      className="w-full flex flex-col items-center justify-center monserrat-bold bg-[url('/lanfondo.png')] bg-cover bg-center py-12 relative"
    >
      <img
        src={logovertical}
        alt="logo lerobotica"
        className="absolute top-0 left-[2%] w-[90px] h-auto bg-white rounded-b-[35px]"
      />

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
        <div className="w-full sm:w-fit flex flex-col sm:flex-row md:hidden items-end sm:items-center sm:gap-4 mb-7 mr-5 sm:mr-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#dd1f89] text-nowrap">
            PRIMARIA BAJA
          </h2>
          <h3 className="text-[#00aabc] text-lg lg:text-xl xl:text-2xl  text-nowrap">
            6 A 8 AÑOS
          </h3>
        </div>
        <div className="w-full sm:w-9/12 md:w-5/12 flex items-center justify-center px-10 lg:px-20">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex justify-end relative mb-5 md:mb-0">
              <img
                src={spikeessentialaventura}
                alt="spike essential"
                className="object-contain object-right"
              />
            </div>
            <a
              href="https://wa.me/584122030567"
              className="bg-[#dd1f89] py-2 lg:py-4 px-5 lg:px-10 text-xl lg:text-2xl xl:text-3xl text-white text-center rounded-4xl -ml-20 hidden md:flex"
            >
              ¡INSCRÍBETE AHORA!
            </a>
          </div>
        </div>
        <div className="w-11/12 md:w-6/12 flex flex-col justify-center">
          <div className="hidden md:flex items-center gap-4 mb-7 ">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#dd1f89] text-nowrap">
              PRIMARIA BAJA
            </h2>
            <h3 className="text-[#00aabc] text-lg lg:text-xl xl:text-2xl  text-nowrap">
              6 A 8 AÑOS
            </h3>
          </div>
          <div className="w-full flex flex-col gap-4 mb-5">
            <video
              className="w-full smdw-10/12 aspect-video rounded-4xl flex items-center justify-center bg-[#696969]"
              controls
              src={video}
              poster={poster}
            ></video>
          </div>
          <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl text-[#005aad] text-center md:text-start mb-5 md:mb-0">
            ¡Crear robots y programarlos <br /> nunca fue tan divertido!
          </h2>
        </div>
        <a
          href="https://wa.me/584122030567"
          className="bg-[#dd1f89] py-2 lg:py-4 px-5 lg:px-10 text-xl lg:text-2xl xl:text-3xl text-white text-center rounded-4xl flex md:hidden"
        >
          ¡INSCRÍBETE AHORA!
        </a>
      </div>
    </section>
  )
}
