import CartWidget from "./CartWidget";
const NavBar = () => {
      return (
            <nav className="nav">
                  <ul className="nav__links">
                        <li className="nav__item">
                              <a className="nav__link " href="*">
                                    Inicio
                              </a>
                        </li>
                        <li className="nav__item">
                              <a className="nav__link" href="*">
                                    Productos
                              </a>
                        </li>
                        <li className="nav__item">
                              <a className="nav__link" href="*">
                                    Nosotros
                              </a>
                        </li>
                        <li className="nav__item">
                              <a className="nav__link" href="*">
                                    Contacto
                              </a>
                        </li>
                  </ul>
                  <div className="icon">
                        {" "}
                        <CartWidget />
                  </div>
            </nav>
      );
};
export default NavBar;
