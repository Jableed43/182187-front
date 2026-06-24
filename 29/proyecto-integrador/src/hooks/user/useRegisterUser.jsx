import { useState } from "react"
import { API_URL } from "../../config"

function useRegisterUser() {
    const [error, setError] = useState(null)

    const registerUser = async (formData) => {
        setError(null)

        try {
           const response = await fetch(`${API_URL}user`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if(!response.ok){
                throw new Error(`Error al registrar usuario, ${response.status}`)
            }

            const data = await response.json()

            // Omitir la contraseña asi no es visible
            // destructuring + spread operator
            const { password: _, ...userSinPassword } = data

            return userSinPassword

        } catch (error) {
            console.error("Error al registrar usuario")
            setError(error)
            return null
        }
    }
    return {error, registerUser}

}

export default useRegisterUser