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
        backgroundSize: '30px',
      }}
      className="w-full flex justify-center monserrat-bold bg-cover bg-center py-12 relative"
    >
      <img
        src={logovertical}
        alt="logo lerobotica"
        className="absolute top-0 left-[2%] w-[90px] h-auto bg-white rounded-b-[35px]"
      />
      <div className="w-full flex flex-col">
        <div className="flex items-center gap-4 ml-40 mb-7">
          <h2 className="text-6xl text-[#005aad]">PREESCOLAR</h2>
          <h3 className="text-[#dd1f89] text-3xl">3 A 5 AÑOS</h3>
        </div>
        <div className="flex justify-end gap-10">
          <div className="w-6/12 flex flex-col justify-center">
            <div className="w-full flex flex-col gap-4 mb-5">
              <div className="w-10/12 aspect-video rounded-4xl flex items-center justify-center bg-[#696969]">
                <MdPlayCircleOutline className="text-8xl text-[#bdc5d4]" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#007a03]">
              ¡Diversión a lo grande <br /> con bloques de LEGOS!
            </h2>
          </div>
          <div className="w-4/12 flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full flex justify-end ">
                <img
                  src={spikeessential}
                  alt="spike essential"
                  className=" absolute right-0 top-32 w-5/12 h-auto object-contain object-right"
                />
              </div>
              <button className="bg-[#f7b503] py-2 lg:py-4 px-5 lg:px-10 text-xl lg:text-3xl text-white text-center rounded-4xl mt-60 lg:mt-72 xl:mt-96 -ml-20">
                ¡INSCRÍBETE AHORA!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
