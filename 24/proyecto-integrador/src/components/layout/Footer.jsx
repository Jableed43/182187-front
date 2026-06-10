import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <NavLink className="nav-link px-2 text-body-secondary" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-2 text-body-secondary"
                to="/products"
              >
                Productos
              </NavLink>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2025 Company, Inc</p>
        </footer>
    </>
  );
}

export default Footer;
