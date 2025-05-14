import { MdPlayCircleOutline } from 'react-icons/md'
import logovertical from '../assets/img/logoVertical.png'
import spikeprime10 from '../assets/img/spikeprime10.png'

export default function PrimariaAltaSection() {
  return (
    <section className="w-full flex justify-center monserrat-bold bg-[#e8eef9] bg-[url('/lanfondo.png')] bg-cover bg-center  relative pt-7 lg:pt-0 pb-7 lg:pb-10">
      <img
        src={logovertical}
        alt="logo lerobotica"
        className="absolute top-0 left-[2%] w-[90px] h-auto bg-white rounded-b-[35px]"
      />
      <div className="w-full flex flex-col">
        <div className="flex justify-end">
          <div className="w-6/12 flex flex-col justify-center pl-10">
            <div className="flex items-center gap-4 mb-7">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#00aabc] text-nowrap">
                PRIMARIA ALTA
              </h2>
              <h3 className="text-[#007a03] text-lg lg:text-xl xl:text-2xl  text-nowrap">
                9 A 11 AÑOS
              </h3>
            </div>
            <div className="w-full flex flex-col gap-4 mb-5">
              <div className="w-10/12 aspect-video rounded-4xl flex items-center justify-center bg-[#696969]">
                <MdPlayCircleOutline className="text-8xl text-[#bdc5d4]" />
              </div>
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl text-[#dd1f89]">
              ¡Robots y mucha acción!
            </h2>
          </div>
          <div className="w-5/12 flex items-center justify-center ">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full flex justify-end relative">
                <img
                  src={spikeprime10}
                  alt="spike essential"
                  className="object-contain object-right"
                />
              </div>
              <button className="bg-[#00aabc] py-2 lg:py-4 px-5 lg:px-10 text-xl lg:text-2xl xl:text-3xl text-white text-center rounded-4xl  -ml-20">
                ¡INSCRÍBETE AHORA!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
