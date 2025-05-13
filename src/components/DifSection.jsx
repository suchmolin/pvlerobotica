export default function DifSection() {
    const data = [
        {
            id: "metodologia-steam",
            icon: "/img/qwetítulo.png",
            titulo: "METODOLOGÍA STEAM"
        },
        {
            id: "conocimientos-de-matematicas",
            icon: "/img/qwetítulo.png",
            titulo: "CONOCIMIENTOS DE MATEMÁTICAS"
        },
        {
            id: "habilidades-socioemocionales",
            icon: "/img/qwetítulo.png",
            titulo: "HABILIDADES SOCIOEMOCIONALES"
        },
        {
            id: "trabajo-en-equipo",
            icon: "/img/qwetítulo.png",
            titulo: "TRABAJO EN EQUIPO"
        },
        {
            id: "conocimientos-de-lectoescritura",
            icon: "/img/qwetítulo.png",
            titulo: "CONOCIMIENTOS EN LECTOESCRITURA"
        },
    ]
    return(
        <section className="w-full flex justify-center bg-[#d21080] py-5">
            <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex justify-center ">
                <div className="w-11/12 flex justify-between">
                    {data.map((item) => (
                        <div key={item.id} className="w-[130px] lg:w-[150px] xl:w-[180px] flex flex-col gap-5">
                            <div className="w-full px-5">

                            <img src={item.icon} alt={item.titulo} className="w-full h-auto" />
                            </div>
                            <p className="text-white text-[10px] lg:text-xs xl:text-base text-center monserrat-bold leading-5">{item.titulo}</p>
                        </div>                
                    ))}
                </div>
            </div>
        </section>
    )
}