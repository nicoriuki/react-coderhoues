import React from "react";
import { Link } from "react-router-dom";

export const Categorias = ({ categorias }) => {
  return (
    <>
      <li className="nav__item nav__link menuDes">
        <Link className="nav__link nLink" to={`/categoria/${categorias.categoriaId}`}>
          {categorias.nombre}
        </Link>
      </li>
    </>
  );
};
