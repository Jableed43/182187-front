// Guardián de rutas: evalúa sesión y rol antes de conceder acceso.
// - Guest (no logueado)            -> redirige a /user/login
// - Autenticado sin rol autorizado -> redirige a / (home)
// Consume el AuthContext (vía useAuth), por lo que reacciona a login/logout.
import { Navigate } from "react-router-dom"
import useAuth from "../../hooks/user/useAuth"

function ProtectedRoute({ children, requireAdmin = false }) {
    const { isAuthenticated, isAdmin } = useAuth()

    if (!isAuthenticated) {
        return <Navigate to="/user/login" replace />
    }

    if (requireAdmin && !isAdmin) {
        return <Navigate to="/" replace />
    }

    return children
}

export default ProtectedRoute
