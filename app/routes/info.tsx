import InfoCard from "../components/info.card"
export default function Info(){
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <InfoCard image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZCa4clyCHjZ5GU5zjFREIWkfK1SNbUHwvsT55L8hXpVEmbwDHrYWdcUUh2SeZrr61kaDtSJCQFfkENH84EWfuORrJuOCNuSPpj2bolO6C" title="Imagen" description="Descripción de la imagen" link="/Contact" />
          <InfoCard image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZCa4clyCHjZ5GU5zjFREIWkfK1SNbUHwvsT55L8hXpVEmbwDHrYWdcUUh2SeZrr61kaDtSJCQFfkENH84EWfuORrJuOCNuSPpj2bolO6C" title="Imagen" description="Descripción de la imagen" link="/Contact" />
          <InfoCard image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZCa4clyCHjZ5GU5zjFREIWkfK1SNbUHwvsT55L8hXpVEmbwDHrYWdcUUh2SeZrr61kaDtSJCQFfkENH84EWfuORrJuOCNuSPpj2bolO6C" title="Imagen" description="Descripción de la imagen" link="/Contact" />
        </div>
      </div>
      
    </>
  )
}