import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './components/pages/Home'
import Products from './components/pages/Products'

export const router = createBrowserRouter([
    {
        path: "/",
        // App va a ser la pagina padre, el componente que maneja al resto de los componentes
        element: <App/>,
        children: [
            // El componente App va a tener varios hijos, que son el resto de las rutas
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/products",
                element: <Products/>
            },
            {
                // Una ruta de error, cualquier ruta mal escrita te lleva a esta pagina
                path: "*",
                element: (
                    <div>
                        <h1> Error 404 </h1>
                        <p>Pagina no encontrada</p>
                    </div>
                )
            }
        ]
    }
])