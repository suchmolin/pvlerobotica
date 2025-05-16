import logovertical from '../assets/img/logoVertical.png'
import { data } from '../data/opinionesProfesores'
import legobg from '../assets/img/LEGObg.png'
import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import poster1 from '../assets/img/poster1.png'
import poster2 from '../assets/img/poster2.png'
import poster3 from '../assets/img/poster3.png'
import poster4 from '../assets/img/poster4.png'

export default function Testimonios() {
  const [vidSelected, setVidSelected] = useState(data[0].id)
  return (
    <section
      style={{
        background: `url(${legobg})`,
        backgroundColor: '#e8eef9',
        backgroundSize: '33px',
      }}
      className="w-full flex flex-col items-center monserrat-bold bg-[#e8eef9] bg-[url('/lanfondo.png')] bg-cover bg-center pb-10 pt-5 sm:py-12 relative"
    >
      <img
        src={logovertical}
        alt="logo lerobotica"
        className="absolute top-0 left-[2%] w-[90px] h-auto bg-white rounded-b-[35px]"
      />
      <h2 className="text-2xl sm:text-5xl text-[#005aad] sm:pt-18 md:pt-0 text-center md:text-start pl-20">
        ¡Testimonios que construyen!
      </h2>
      <div className="w-[330px] sm:w-[620px] md:w-[760px] lg:w-[1000px] flex flex-col md:flex-row gap-5 justify-between mt-10">
        <div className="w-full md:w-8/12 flex flex-col items-center justify-center">
          {data.map((item) => {
            const sel = vidSelected === item.id
            return (
              sel && (
                <div
                  key={item.id}
                  className="w-full justify-center items-center rounded-t-xl sm:rounded-t-[10px] "
                >
                  <video
                    className={`rounded-lg sm:rounded-t-xl w-full`}
                    controls
                    src={item.src}
                    poster={poster1}
                  ></video>
                </div>
              )
            )
          })}
        </div>
        <div className="w-full md:w-4/12 flex md:flex-col items-center gap-4 md:gap-0">
          {data.map((item) => {
            const sel = vidSelected !== item.id
            return (
              sel && (
                <button
                  onClick={() => {
                    setVidSelected(item.id)
                    setTimeout(() => {
                      document.querySelector('video').play()
                    }, 300)
                  }}
                  key={item.id}
                  className={`relative rounded-2xl w-8/12 h-[100px] sm:h-[130px] lg:h-[140px] order-2 transition-all duration-700 cursor-pointer flex items-center justify-center overflow-hidden group`}
                >
                  <img
                    src={poster1}
                    alt="item.id"
                    className="blur-[2px] group-hover:blur-0 transition-all duration-300 object-cover object-top"
                  />
                  <FaPlay className="text-3xl sm:text-4xl opacity-90 text-white group-hover:opacity-20 transition-all duration-300" />
                </button>
              )
            )
          })}
        </div>
      </div>
    </section>
  )
}
