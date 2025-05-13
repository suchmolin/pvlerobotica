import { MdPlayCircleOutline } from 'react-icons/md'
import logovertical from '../assets/img/logoVertical.png'
import spikeessentialaventura from '../assets/img/spikeessentialaventura.png'

export default function PrimariaBajaSection() {
  return (
    <section className="w-full flex justify-center monserrat-bold bg-[#e8eef9] bg-[url('/lanfondo.png')] bg-cover bg-center py-12 relative">
      <img
        src={logovertical}
        alt="logo lerobotica"
        className="absolute top-0 left-[2%] w-[90px] h-auto bg-white rounded-b-[35px]"
      />
      <div className="w-full flex flex-col">
        <div className="flex justify-center">
          <div className="w-5/12 flex items-center justify-center px-10 lg:px-20">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full flex justify-end relative">
                <img
                  src={spikeessentialaventura}
                  alt="spike essential"
                  className="object-contain object-right"
                />
              </div>
              <button className="bg-[#dd1f89] py-2 lg:py-4 px-5 lg:px-10 text-xl lg:text-2xl xl:text-3xl text-white text-center rounded-4xl  -ml-20">
                ¡INSCRÍBETE AHORA!
              </button>
            </div>
          </div>
          <div className="w-6/12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-7">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#dd1f89] text-nowrap">
                PRIMARIA BAJA
              </h2>
              <h3 className="text-[#00aabc] text-lg lg:text-xl xl:text-2xl  text-nowrap">
                6 A 8 AÑOS
              </h3>
            </div>
            <div className="w-full flex flex-col gap-4 mb-5">
              <div className="w-10/12 aspect-video rounded-4xl flex items-center justify-center bg-[#696969]">
                <MdPlayCircleOutline className="text-8xl text-[#bdc5d4]" />
              </div>
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl text-[#005aad]">
              ¡Creat robots y programarlos <br /> nunca fue tan divertido!
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
