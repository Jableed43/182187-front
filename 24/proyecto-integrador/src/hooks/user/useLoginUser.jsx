import { useState } from "react"
import { API_URL } from "../../config"

function useLoginUser() {
    const [error, setError] = useState(null)

    const loginUser = async (email, password) => {
        setError(null)

        try {
           const response = await fetch(`${API_URL}user`)
            if(!response.ok){
                throw new Error(`Error al leer usuarios, ${response.status}`)
                }
            const users = await response.json()

            // Lo ideal seria tener un getUserByEmail y no tener que buscar al usuario entre los datos
            // No es escalable por encima de los 10000 users deja de ser optimo
             const userFound = users.find((user) => user.email === email && user.password === password)
            
            if(!userFound){
                console.log(userFound)
                setError("Credenciales incorrectas")
                return null
            }

            // No retornamos la password por seguridad
            const { password: _, ...userSinPassword } = userFound

            return userSinPassword

        } catch (error) {
            console.error("Error al loggear usuario", error)
            setError(error)
            return null
        }
    }
    return {error, loginUser}
}

export default useLoginUser