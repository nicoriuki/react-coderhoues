import React from "react";
import { Link } from "react-router-dom";

export const Categorias = ({ categorias }) => {
  return (
    <>
      <li className="liDespegable nav__link">
        <Link className="nav__link nLink" to={`/categoria/${categorias.categoriaId}`}>
          {categorias.nombre}
        </Link>
      </li>
    </>
  );
};
