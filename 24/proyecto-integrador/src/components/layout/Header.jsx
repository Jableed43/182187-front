import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/user/useAuth";

function Header() {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout()
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Ecommerce
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/products"
                >
                  Productos
                </NavLink>
              </li>
              {
                !isAuthenticated && (
              <li className="nav-item">
                <NavLink
                  aria-current="page"
                  className="nav-link"
                  to="/user/register"
                >
                  Registrate
                </NavLink>
              </li>
                )
              }
              {!isAuthenticated && (
                <li className="nav-item">
                  <NavLink
                    aria-current="page"
                    className="nav-link"
                    to="/user/login"
                  >
                    Ingresá
                  </NavLink>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <button onClick={handleLogout} >
                    Logout
                  </button>
                </li>
              )}
              
            </ul>
          </div>
        </div>
      </nav>
      {user && <p> Bienvenido {user.email}!! </p>}
    </header>
  );
}

export default Header;
