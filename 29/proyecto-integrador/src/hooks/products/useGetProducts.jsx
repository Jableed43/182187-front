import { useEffect, useState } from "react"
import { API_URL } from "../../config.js"

function useGetProducts() {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    // url va a ser la direccion de la API
    const getProducts = async (url) => {
        try {
            setLoading(true)
            setError(null)

           const response = await fetch(url)

           if(!response.ok){
            throw new Error("Error al traer los registros de productos", response.status)
           }

           // Convertimos la respuesta de la api en un obj de js
           const data = await response.json()

           setProducts(data)

        } catch (error) {
            console.error(error)
            setError(error)
            setProducts([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts(`${API_URL}products`)
    }, [])

    // refetch permite recargar el listado sin recargar toda la página (ej: tras borrar)
    const refetch = () => getProducts(`${API_URL}products`)

    return {products, error, loading, refetch}
}

export default useGetProducts