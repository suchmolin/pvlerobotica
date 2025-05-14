import fondoLego from '../assets/img/lanfondo.png'

export default function DosSemanas() {
  const data = [
    {
      id: 'primera-etapa',
      etapa: '1',
      etapa2: 'RA',
      fechaInicio: '21 DE JULIO',
      fechaFin: 'AL 01 DE AGOSTO',
      color: '#f7b503',
    },
    {
      id: 'segunda-etapa',
      etapa: '2',
      etapa2: 'DA',
      fechaInicio: '04 DE AGOSTO',
      fechaFin: 'AL 15 DE AGOSTO',
      color: '#007a03',
    },
    {
      id: 'tercera-etapa',
      etapa: '3',
      etapa2: 'RA',
      fechaInicio: '18 DE AGOSTO',
      fechaFin: 'AL 29 DE AGOSTO',
      color: '#dd1f89',
    },
    {
      id: 'cuarta-etapa',
      etapa: '4',
      etapa2: 'TA',
      fechaInicio: '01 DE SEPTIEMBRE',
      fechaFin: 'AL 12 DE SEPTIEMBRE',
      color: '#00aabc',
    },
  ]
  return (
    <section
      style={{ background: `url(${fondoLego})` }}
      className="w-full flex flex-col gap-4 items-center py-10 monserrat-bold"
    >
      <h2 className="w-full text-4xl text-center  text-[#323232]">
        2 SEMANAS DE PURA DIVERSIÓN
      </h2>
      <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] py-5 flex flex-wrap gap-5 justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-5/12 h-[80px] bg-[#e4effa] rounded-3xl overflow-hidden flex"
          >
            <div
              style={{ background: item.color }}
              className="w-4/12 h-full rounded-r-3xl text-white text-3xl flex items-center justify-center"
            >
              1<span className="text-lg -mt-3 mr-2">era</span> ETAPA
            </div>
            <div className="w-8/12 text-[#474748] h-full flex flex-col items-center justify-center text-center leading-6 text-2xl">
              <p>
                21 DE JULIO
                <br />
                AL 01 DE AGOSTO
              </p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="w-full text-4xl text-center  text-[#323232]">
        <span className="text-[#dd1f89]"> HORARIOS:</span> 9:00 AM A 12:00 AM Ó
        2:00 PM A 5:00 PM
      </h3>
    </section>
  )
}
