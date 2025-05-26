import legobg from '../assets/img/LEGObg.png'

export default function DosSemanas() {
  const data = [
    {
      id: 'primera-etapa',
      etapa: 'PRIMERA',
      fechaInicio: '21 DE JULIO',
      fechaFin: 'AL 01 DE AGOSTO',
      color: '#f7b503',
    },
    {
      id: 'segunda-etapa',
      etapa: 'SEGUNDA',
      fechaInicio: '04 DE AGOSTO',
      fechaFin: 'AL 15 DE AGOSTO',
      color: '#007a03',
    },
    {
      id: 'tercera-etapa',
      etapa: 'TERCERA',
      fechaInicio: '18 DE AGOSTO',
      fechaFin: 'AL 29 DE AGOSTO',
      color: '#dd1f89',
    },
    {
      id: 'cuarta-etapa',
      etapa: 'CUARTA',
      fechaInicio: '01 DE SEPTIEMBRE',
      fechaFin: 'AL 12 DE SEPTIEMBRE',
      color: '#00aabc',
    },
  ]
  return (
    <section
      style={{
        background: `url(${legobg})`,
        backgroundColor: '#fff',
        backgroundSize: '33px',
      }}
      className="w-full flex flex-col gap-4 items-center py-10 monserrat-bold"
    >
      <h2 className="w-full text-2xl sm:text-3xl lg:text-4xl text-center  text-[#323232]">
        2 SEMANAS DE PURA DIVERSIÓN
      </h2>
      <div className="w-[330px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] py-5 flex flex-wrap gap-5 justify-center">
        {data.map((item) => {
          const { id, etapa, fechaInicio, fechaFin, color } = item
          return (
            <div
              key={id}
              className="w-10/12 sm:w-8/12 md:w-5/12 h-[80px] bg-[#e4effa] rounded-3xl overflow-hidden flex"
            >
              <div
                style={{ background: color }}
                className="w-5/12 lg:w-4/12 h-full rounded-r-3xl text-white text-sm sm:text-base lg:text-lg xl:text-lg flex items-center justify-center leading-tight"
              >
                {etapa} <br />
                TEMPORADA
              </div>
              <div className="w-8/12 text-[#474748] h-full flex flex-col items-center justify-center text-center leading-6 text-base sm:text-lg lg:text-2xl">
                <p>
                  {fechaInicio}
                  <br />
                  {fechaFin}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <h3 className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center  text-[#323232] flex flex-col sm:flex-row justify-center">
        <span className="text-[#dd1f89]"> HORARIOS:</span> 9:00 AM A 12:00 AM Ó
        2:00 PM A 5:00 PM
      </h3>
    </section>
  )
}
