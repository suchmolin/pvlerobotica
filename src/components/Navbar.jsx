import logopng from '../assets/img/logoVertical.png'

export default function Navbar() {
  return (
    <nav className="w-full h-[100px] absolute flex flex-col sm:flex-row monserrat justify-center items-center z-10">
      <div className="lg:absolute lg:top-20 w-full sm:h-full flex justify-center lg:justify-start items-center xl:pl-20">
        <div className="relative w-[150px] xl:w-[220px] flex items-center mt-12">
          <img src={logopng} alt="Logo" className="object-contain" />
        </div>
      </div>
      {/* <ul className="h-full flex gap-5 sm:gap-4 lg:gap-7 items-center text-xs sm:text-md lg:text-xl monserrat-bold sm:pt-18 md:pt-0 z-20">
        <li className="hover:scale-[103%] transition-transform duration-300 text-center">
          <a href="#quienessomos">¿Quienes somos?</a>
        </li>
        <li className="hidden sm:block">|</li>
        <li className="hover:scale-[103%] transition-transform duration-300">
          <a className="#" href="#etapas">
            Etapas
          </a>
        </li>
        <li className="hidden sm:block">|</li>
        <li className="hover:scale-[103%] transition-transform duration-300">
          <a className="#" href="#testimonios">
            Testimonios
          </a>
        </li>
        <li className="hidden sm:block">|</li>
        <li className="hover:scale-[103%] transition-transform duration-300">
          <a className="" href="#fechas">
            Fechas
          </a>
        </li>
      </ul> */}
    </nav>
  )
}
