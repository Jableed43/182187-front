import { useState } from "react"
import { API_URL } from "../../config"

// Soft Delete de usuarios: en lugar de borrar físicamente, marca deletedAt
// con la fecha actual (PATCH /user/:id). El usuario deja de listarse y no
// podrá loguearse. El Superadmin no puede eliminarse (se valida en la página).
function useDeleteUser() {
    const [error, setError] = useState(null)

    const deleteUser = async (userId) => {
        setError(null)
        try {
            const response = await fetch(`${API_URL}user/${userId}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ deletedAt: new Date().toISOString() })
            })

            if (!response.ok) {
                throw new Error(`Error al eliminar el usuario, ${response.status}`)
            }

            const data = await response.json()
            return data
        } catch (error) {
            console.error(error)
            setError(error)
            return null
        }
    }

    return { deleteUser, error }
}

export default useDeleteUser
