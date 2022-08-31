import { Link } from "react-router-dom";
import { myContext } from "../../components/CartContext";
import { useContext } from "react";
const MenuDespegable = () => {
  const { categorias } = useContext(myContext);
  return (
    <>
      <ul className="MenuDespegable">
        {categorias &&
          categorias.map((item) => (
            <li className="nav__item nav__link menuDes" key={item.id}>
              <Link className="nav__link nLink" to={`/categoria/${item.categoriaId}`}>
                {item.nombre}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default MenuDespegable;
