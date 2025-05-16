import { MdPlayCircleOutline } from 'react-icons/md'
import logovertical from '../assets/img/logoVertical.png'
import spikeessential from '../assets/img/sintitutlo.png'
import legobg from '../assets/img/LEGObg.png'

export default function PreescolarSection() {
  return (
    <section
      style={{
        background: `url(${legobg})`,
        backgroundColor: '#e8eef9',
        backgroundSize: '33px',
      }}
      className="w-full flex justify-center monserrat-bold bg-cover bg-center py-7 sm:py-12 relative"
    >
      <img
        src={logovertical}
        alt="logo lerobotica"
        className="absolute top-0 left-[2%] w-[90px] h-auto bg-white rounded-b-[35px]"
      />
      <div className="w-full flex flex-col  z-10">
        <div className="flex flex-col sm:flex-row items-end sm:items-center sm:gap-4 sm:ml-40 mb-7 w-full sm:w-fit justify-end pr-5 sm:pr-0">
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-[#005aad]">
            PREESCOLAR
          </h2>
          <h3 className="text-2xl md:text-3xl text-[#dd1f89] ">3 A 5 AÑOS</h3>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-end md:gap-10 -mt-10 sm:-mt-20 md:mt-0">
          <div className="w-11/12 md:w-7/12 flex flex-col justify-center items-center md:items-start -mt-10 sm:-mt-20 md:mt-0">
            <div className="w-full flex flex-col items-center md:items-start gap-4 mb-5">
              <div className="w-11/12 sm:w-10/12 aspect-video rounded-4xl flex items-center justify-center bg-[#696969]">
                <MdPlayCircleOutline className="text-8xl text-[#bdc5d4]" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#007a03] text-center md:text-start">
              ¡Diversión a lo grande <br /> con bloques de LEGOS!
            </h2>
            <button className="block md:hidden bg-[#f7b503] py-2 lg:py-4 px-5 lg:px-10 text-xl lg:text-3xl text-white text-center rounded-4xl mt-10 md:mt-60 lg:mt-72 xl:mt-96 ">
              ¡INSCRÍBETE AHORA!
            </button>
          </div>
          <div className="md:w-4/12 flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full flex justify-end ">
                <img
                  src={spikeessential}
                  alt="spike essential"
                  className=" md:absolute right-0 top-32 w-11/12 md:w-5/12 h-auto object-contain object-right"
                />
              </div>
              <button className="hidden md:block bg-[#f7b503] py-2 lg:py-4 px-5 lg:px-10 text-xl lg:text-3xl text-white text-center rounded-4xl mt-60 lg:mt-72 xl:mt-96 -ml-20">
                ¡INSCRÍBETE AHORA!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
