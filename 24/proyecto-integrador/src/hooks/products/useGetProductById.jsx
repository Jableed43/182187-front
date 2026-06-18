import { useState } from 'react'
import { API_URL } from '../../config'

function useGetProductById() {
    const [error, setError] = useState(null)

    const getProductById = async (productId) => {
        try {
            setError(null)

            const response = await fetch(`${API_URL}products/${productId}`)

                if(!response.ok){
                    throw new Error(
                        "Error al traer el producto", response.status
                    )
                }

                const data = await response.json()

                return data
        } catch (error) {
            console.error(error)
            setError(error)
            return null
        }
    }
    return {getProductById, error}
  
}

export default useGetProductById