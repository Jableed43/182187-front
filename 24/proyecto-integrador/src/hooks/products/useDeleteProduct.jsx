import { useState } from 'react'
import { API_URL } from '../../config'

function useDeleteProduct() {
  const [error, setError] = useState(null)

  const deleteProduct = async (productId) => {
    setError(null)
    try {
       const response = await fetch(`${API_URL}products/${productId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "Application/json"
            }
        })

        if(!response.ok){
            throw new Error(`Http error, status: ${response.status}`)
        }

        const data = await response.json()

        // Dos opciones de retorno en DELETE
        // 1. El dato borrado
        // 2. Un objeto con un mensaje tipo "Producto borrado"
        return data

    } catch (error) {
        console.error(error)
        setError(error)
    }
  }
  return {error, deleteProduct}
}

export default useDeleteProduct
