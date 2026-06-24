import { useState } from "react"
import { API_URL } from "../../config"

// Registra la orden de compra en la API (POST /orders).
// Estructura: { userId, items: [{ productId, quantity }], total, createdAt }.
// json-server asigna el id automáticamente.
function usePostOrder() {
    const [error, setError] = useState(null)

    const postOrder = async (order) => {
        setError(null)
        try {
            const response = await fetch(`${API_URL}orders`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(order)
            })

            if (!response.ok) {
                throw new Error(`Error al registrar la orden, ${response.status}`)
            }

            return await response.json()
        } catch (error) {
            console.error(error)
            setError(error)
            return null
        }
    }

    return { postOrder, error }
}

export default usePostOrder
