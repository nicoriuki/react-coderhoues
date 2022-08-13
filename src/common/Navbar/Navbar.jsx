import CartWidget from "./CartWidget";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Categorias } from "./Categorias";

const NavBar = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const refAcollection = collection(db, "categorias");
    getDocs(refAcollection).then((res) => {
      let objeto = res.docs;

      objeto = objeto.map((item) => {
        return { ...item.data(), id: item.id };
      });
      setCategorias(objeto);
    });
  }, []);
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
          <ul className="ulDespegable ">{categorias && categorias.map((item) => <Categorias key={item.id} categorias={item} />)}</ul>
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
