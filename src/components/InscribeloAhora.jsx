import legobg from '../assets/img/LEGObg.png'
import logovertical from '../assets/img/logoVertical.png'

export default function InscribeloAhora() {
  return (
    <section
      style={{
        background: `url(${legobg})`,
        backgroundColor: '#fff',
        backgroundSize: '33px',
      }}
      className="w-full flex justify-center monserrat-bold bg-[url('img/lanfondo.png')] pt-22 pb-10 md:py-20 relative"
    >
      <img
        src={logovertical}
        alt="logo lerobotica"
        className="absolute top-0 right-[2%] w-[90px] h-auto bg-white rounded-b-[35px]"
      />
      <div className="w-[325px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex flex-col items-center">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl text-[#00aabc]">
          Inscribe a tu hij@ ahora para que disfrute{' '}
          <br className="hidden sm:block" />
          sus vacaciones con esta
          <span className="text-[#d21080]"> experiencia tecnológica</span>
        </h2>
        <a
          href="https://wa.me/584122030567"
          className="py-2 px-6 bg-[#f7b503] rounded-md text-2xl sm:text-3xl md:text-4xl text-white mt-10"
        >
          ¡INSCRIBELO AHORA!
        </a>
      </div>
    </section>
  )
}
