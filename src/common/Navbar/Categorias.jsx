import { Link } from "react-router-dom";
import { myContext } from "../../components/CartContext";
import { useContext } from "react";
export const Categorias = ({ categorias }) => {
  const { screen } = useContext(myContext);

  let catNombre = categorias.nombre;
  if ((categorias.nombre.length > 12) & (screen < 1300)) {
    catNombre = categorias.abreviado;
  }

  return (
    <>
      <li className="nav__item nav__link menuDes">
        <Link className="nav__link nLink" to={`/categoria/${categorias.categoriaId}`}>
          {catNombre}
        </Link>
      </li>
    </>
  );
};
