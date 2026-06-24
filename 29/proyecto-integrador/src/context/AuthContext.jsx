// Contexto de autenticación: fuente única de verdad de la sesión.
// Antes useAuth usaba estado local, por lo que cada componente tenía su propia
// copia y los cambios de login/logout no se propagaban. Con el Context, todos
// los componentes (Header, ProtectedRoute, ProductCard, etc.) comparten el
// mismo estado de sesión y reaccionan de forma inmediata.
import { createContext, useEffect, useState } from "react"

// Clave de la sesión en sessionStorage (podría ser un token)
const SESSION_KEY = "usuario"

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    // Al montar la app, recuperamos la sesión guardada (si existe)
    useEffect(() => {
        const storedUser = sessionStorage.getItem(SESSION_KEY)
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser))
            } catch (error) {
                console.error(error)
                setError(error)
            }
        }
    }, [])

    // Crear sesión y persistirla
    const login = (userData) => {
        setUser(userData)
        // TODO: NO GUARDAR PASSWORD (useLoginUser ya la omite antes de llegar acá)
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        sessionStorage.removeItem(SESSION_KEY)
    }

    const value = {
        user,
        login,
        logout,
        error,
        isAuthenticated: user !== null,
        isAdmin: user?.role === "admin",
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
