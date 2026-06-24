import { useEffect, useState } from "react"
import { API_URL } from "../../config"

// Descarga la colección completa de usuarios (GET /user) y la guarda en estado.
// Excluye a los usuarios con Soft Delete (deletedAt): no deben mostrarse.
// El filtrado/búsqueda por nombre o email se hace en memoria del cliente (en la página).
function useGetUsers() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const getUsers = async () => {
        try {
            setLoading(true)
            setError(null)

            const response = await fetch(`${API_URL}user`)

            if (!response.ok) {
                throw new Error(`Error al traer los usuarios, ${response.status}`)
            }

            const data = await response.json()

            // Solo usuarios activos (sin deletedAt) y sin exponer la password
            const activos = data
                .filter((user) => !user.deletedAt)
                .map(({ password: _, ...rest }) => rest)

            setUsers(activos)
        } catch (error) {
            console.error(error)
            setError(error)
            setUsers([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    // refetch permite recargar el listado tras un borrado
    return { users, error, loading, refetch: getUsers }
}

export default useGetUsers
