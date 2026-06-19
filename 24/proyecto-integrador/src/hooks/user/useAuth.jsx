// Este hook nos permite:
// Logearnos y deslogearnos desde cualquier lugar con logica centralizada
// Generar y destruir sesion de usuario
// Todo el sistema conoce quien es el usuario loggeado
// El sistema puede saber si hay un usuario loggeado o no (usuario o guest)
import { useEffect, useState } from "react"

// Es una constante que simboliza la clave de la sesion - podria ser un token
const SESSION_KEY = "usuario"

function useAuth() {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    // ¿Si tenemos sesion, donde guardamos el usuario?
    useEffect(() => {
        const storedUser = sessionStorage.getItem(SESSION_KEY)
        if(storedUser){
            try {
                // Pasa a objeto de js el usuario guardado en JSON que está en sessionStorage
                setUser(JSON.parse(storedUser))
            } catch (error) {
                console.error(error)
                setError(error)
            }
        }
    }, [])

    // Crear sesion y guardarla
    const login = (userData) => {
        setUser(userData)
        // json.stringify convierte de js a json para poder guardarlo
        // TODO: NO GUARDAR PASSWORD
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        sessionStorage.removeItem(SESSION_KEY)
    }

    return {
        user,
        login,
        logout,
        error,
        isAuthenticated: user !== null
    }

}

export default useAuth