// Este hook nos permite consumir el AuthContext desde cualquier componente:
// login/logout, saber quién es el usuario logueado (o guest) y su rol (isAdmin).
// La lógica y el estado viven en el AuthProvider, garantizando una única fuente
// de verdad reactiva en toda la aplicación.
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

function useAuth() {
    const context = useContext(AuthContext)

    if (context === null) {
        throw new Error("useAuth debe usarse dentro de un <AuthProvider>")
    }

    return context
}

export default useAuth
