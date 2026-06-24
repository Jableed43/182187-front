import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Layout en react es la estructura que tiene cada sitio
// Esta estructura se repite


function Layout() {
  return (
    <>
    <Header />
    
    <main>
        {/* Outlet integra cualquier componente que visites */}
    <Outlet/>
    </main>
    
    <Footer />
    </>
  )
}

export default Layout