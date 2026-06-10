// Importar desde assets implica hacer el recorrido completo de carpetas
// import img from '../../assets/computer.png'
import portada from "../../assets/portada.webp"

function Home() {
  return (
    <>
    <h1>Fusion Mart</h1>
    <div className="img-portada-container" >
    <img src={portada} className="img-portada" alt="imagen portada" />
    </div>
    {/* En este caso tomamos la imagen desde public */}
    {/* <img src="/computer.png" alt="computadora" /> */}
    </>
  )
}

export default Home