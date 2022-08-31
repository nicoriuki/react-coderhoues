import CartWidget from "./CartWidget";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

import { Categorias } from "./Categorias";
import { myContext } from "../../components/CartContext";
import { useContext } from "react";
const NavBar = () => {
  const { screen, categorias } = useContext(myContext);
  const [link, setLink] = useState("/");

  useEffect(() => {
    screen < 1030 ? setLink("/MenuDespegable/") : setLink("/");
  }, [screen]);
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to={link}>
          <img className="nav__logoImg" src={Logo} alt="logo" />
        </Link>
      </div>
      {screen < 1030 ? (
        <div className="division"></div>
      ) : (
        <ul className="nav__links">
          <li className="nav__item">
            <Link to={"/"} className="nav__link ">
              Inicio
            </Link>
          </li>
          {categorias && categorias.map((item) => <Categorias key={item.id} categorias={item} />)}
        </ul>
      )}
      <div className="icon">
        <CartWidget />
      </div>
    </nav>
  );
};
export default NavBar;
