import { useEffect, useState } from "react"

// Si un hook que hace llamado a una api, trae datos y estos son un array
// necesariamente necesitas un estado para guardar esos datos

const useRickAndMortyApi = () => {
    // Estados
    const [characters, setCharacters] = useState([])
    const [info, setInfo] = useState({})
    // A traves del estado loading el sistema sabe si esta en proceso o un proceso terminó
    const [loading, setLoading] = useState(false)
    // El error es un objeto por eso lo paso como null
    const [error, setError] = useState(null)

    // Esto nos permite acceder a las variables de entorno
    const initialUrl = import.meta.env.VITE_RICK_AND_MORTY_API_URL

    // async sirve para definir una funcion como asincronica
    const fetchCharacters = async (url) => {
        setLoading(true)
        // El error se setea a null caso que si hubo un error se limpie
        setError(null)

        try {
            // Await le avisa a la funcion que especificamente esta instruccion debe ser completada para continuar
            // Fetch hace un llamado a la API
            const response = await fetch(url)
            console.log(response)

            // Si la respuesta no fue positiva, es decir tiene errores, entonces lanzamos un error
            if(!response.ok){
                // Manejo de errores
                // generar errores  
                throw new Error(`HTTP error! status ${response.status}`)
            }
            // Si tenes un if y este if tiene un retorno o un throw no necesita else
            
            // await response.json() -> convertir JSON a objeto de javascript
            const data = await response.json()
            console.log(data)
            setCharacters(data.results)
            setInfo(data.info)
        } catch (error) {
            console.error(error)
            setError(error)
            setCharacters([])
            setInfo({})
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(initialUrl) {
            // eslint-disable-next-line
           fetchCharacters(initialUrl)
        } else {
            setError(new Error("El env que contiene el enlace a la api no esta definido en las variables de entorno"))
            setLoading(false)
        }
    }, [initialUrl])

    const onPrevious = () => {
        if(info.prev){
            fetchCharacters(info.prev)
        }
    }

    const onNext = () => {
        if(info.next){
            fetchCharacters(info.next)
        }
    }

    return {
        characters,
        info,
        loading,
        error,
        onPrevious,
        onNext,
    }
}

export default useRickAndMortyApi;