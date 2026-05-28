import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Un componente se escribe una sola vez y lo usas todas las veces que quieras
// Y todas esas copias son independientes
function App() {
  // Estado
  //  const [estado, setEstado]
  // el setEstado es la unica manera de modificar el estado
  // useState(valorInicialDelEstado)
  const [likeCounter, setLikeCounter] = useState(0)

 // Aca se escribe la mayoria del codigo de js
 // storageName es el nombre del espacio en memoria de localStorage que estamos utilizando
  const load = (storageName, setter) => {
    // Esta funcion sincroniza el localStorage con el estado
    // Trae la key guardada de localstorage
    const saved = localStorage.getItem(storageName)
    if(saved !== null){
      // se asegura que no esté vacia
      setter(parseInt(saved))
      // guarda el valor en el estado asegurando que sea numero
    }
  }

  // Es una funcion, que cuando la pagina se carga, ejecuta codigo
  // ante ciertos eventos/cambios se podria volver a disparar la ejecucion del codigo
  useEffect(() => {
    load("myLikeCount", setLikeCounter)
  }, [])



  return (
    // Fragment sirve para escribir codigo
    // Todo componente dentro del return si es mas de uno, obligatoriamente tiene que tener un elemento que lo encierre
    <>
       <div className="like-counter" >
        <h1>¡Dale me gusta!</h1>
        <div className="like-area">
            <button id="likeButton" > <i className="fa-solid fa-heart like-button"></i> </button>

            <span className="like-count" id="likeCount">{likeCounter}</span>
        </div>
        <button id="resetLikeButton" >Resetear</button>
        <small> Haz clic en el corazón para aumentar el contador </small>
    </div>

    </>
  )
}

export default App
