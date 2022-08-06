import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to={"/"}>
          <img className="nav__logoImg" src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className="nav__links">
        <li className="nav__item">
          <Link to={"/"} className="nav__link ">
            Inicio
          </Link>
        </li>
        <li className="nav__item nav__link menuDes">
          Productos
          <ul className="ulDespegable ">
            <li className="liDespegable nav__link">
              <Link className="nav__link nLink" to={"/categoria/Malbec"}>
                Malbec
              </Link>
            </li>
            <li className="liDespegable nav__link">
              <Link className="nav__link nLink" to={"/categoria/Cabernet-Sauvignon"}>
                Cabernet Sauvignon
              </Link>
            </li>
            <li className="liDespegable  nav__link">
              <Link className="nav__link nLink" to={"/categoria/Pinot-Noir"}>
                Pinot Noir
              </Link>
            </li>
            <li className="liDespegable  nav__link">
              <Link className="nav__link nLink" to={"/categoria/Blend"}>
                Blend
              </Link>
            </li>
            <li className="liDespegable  nav__link">
              <Link className="nav__link nLink" to={"/categoria/Sauvignon-Blanc"}>
                Sauvignon Blanc
              </Link>
            </li>
            <li className="liDespegable  nav__link">
              <Link className="nav__link nLink" to={"/categoria/Chardonnay"}>
                Chardonnay
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <Link to={"/nosotros"} className="nav__link ">
            Nosotros
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/contacto"} className="nav__link ">
            Contacto
          </Link>
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
