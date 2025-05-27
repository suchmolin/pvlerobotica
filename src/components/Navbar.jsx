import logopng from '../assets/img/logo.png'

export default function Navbar() {
  return (
    <nav className="w-full sm:h-[100px] absolute flex flex-col sm:flex-row monserrat justify-end xl:justify-center items-center sm:pr-10 lg:pr-20 xl:pr-0 z-10">
      <div className="relative sm:absolute top-0 w-full sm:h-full flex justify-center sm:justify-start items-center pl-10 md:pl-20">
        <div className="relative w-[170px] md:w-[200px] lg:w-[270px] flex items-center">
          <img src={logopng} alt="Logo" className="object-contain" />
        </div>
      </div>
      <ul className="h-full flex gap-5 sm:gap-4 lg:gap-7 items-center text-xs sm:text-md lg:text-xl monserrat-bold sm:pt-18 md:pt-0 z-20">
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
      </ul>
    </nav>
  )
}
