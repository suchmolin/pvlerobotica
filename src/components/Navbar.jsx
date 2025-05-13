export default function Navbar() {
    return(
        <nav className="w-full h-[100px] absolute flex monserrat justify-end xl:justify-center items-center pr-10 lg:pr-20 xl:pr-0">
            <div className="absolute left-7 lg:left-10 top-0 h-full flex items-center">
                <div className="relative w-[200px] lg:w-[270px] flex items-center">
                    <img src="/img/logo.png" alt="Logo" className="object-contain"/>
                </div>
            </div>
            <ul className="h-full flex gap-4 lg:gap-7 items-center text-md lg:text-xl monserrat-bold">
                <li className="hover:scale-[103%] transition-transform duration-300">
                    <a className="" href="#home">¿Quienes somos?</a>
                </li>
                <li>|</li>
                <li className="hover:scale-[103%] transition-transform duration-300">
                    <a className="" href="#about">Etapas</a>
                </li>
                <li>|</li>
                <li className="hover:scale-[103%] transition-transform duration-300">
                    <a className="" href="#services">Testimonios</a>
                </li>
                <li>|</li>
                <li className="hover:scale-[103%] transition-transform duration-300">
                    <a className="" href="#contact">Fechas</a>
                </li>
            </ul>    
        </nav>
    )
}