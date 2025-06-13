import logovertical from '../assets/img/logoVertical.png'
import { data } from '../data/opinionesProfesores'
import legobg from '../assets/img/LEGObg.png'
import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import testimonial1 from '../assets/img/testimonial1.mp4'
import testimonial2 from '../assets/img/testimonial2.mp4'
import testimonial3 from '../assets/img/testimonial3.mp4'
import testimonial4 from '../assets/img/testimonial4.mp4'
import testimonialPoster1 from '../assets/img/postertestinonio1.png'
import testimonialPoster2 from '../assets/img/postertestinonio2.png'
import testimonialPoster3 from '../assets/img/postertestinonio3.png'
import testimonialPoster4 from '../assets/img/postertestinonio4.png'

export default function Testimonios() {
  const testimonial = [testimonial1, testimonial2, testimonial3, testimonial4]
  const posters = [
    testimonialPoster1,
    testimonialPoster2,
    testimonialPoster3,
    testimonialPoster4,
  ]
  const [vidSelected, setVidSelected] = useState(data[0].id)
  return (
    <section
      id="testimonios"
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
          {data.map((item, i) => {
            const sel = vidSelected === item.id
            return (
              sel && (
                <div
                  key={item.id}
                  className="w-full justify-center items-center rounded-t-xl sm:rounded-t-[10px] "
                >
                  <video
                    id="videotestimonial"
                    className={`rounded-lg sm:rounded-t-xl w-full`}
                    controls
                    src={testimonial[i]}
                    poster={posters[i]}
                  ></video>
                </div>
              )
            )
          })}
        </div>
        <div className="w-full md:w-4/12 flex md:flex-col items-center gap-4 md:gap-0">
          {data.map((item, i) => {
            const sel = vidSelected !== item.id
            return (
              sel && (
                <button
                  onClick={() => {
                    setVidSelected(item.id)
                    setTimeout(() => {
                      document.querySelector('#videotestimonial').play()
                    }, 300)
                  }}
                  key={item.id}
                  className={`relative rounded-2xl w-8/12 h-[100px] sm:h-[130px] lg:h-[140px] order-2 transition-all duration-700 cursor-pointer flex items-center justify-center overflow-hidden group`}
                >
                  <img
                    src={posters[i]}
                    alt="item.id"
                    className="group-hover:blur-0 transition-all duration-300 object-cover object-top rounded-2xl"
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
