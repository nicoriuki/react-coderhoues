import AgregarItem from "./AgregarItem";
import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({ item }) => {
  const [compra, setCompra] = useState();
  const { imagen, nombre, precio, stock, id } = item;
  return (
    <>
      <article className="item">
        <div className="iCard">
          <div>
            <img className="iCard__img" src={imagen} alt={nombre} />
          </div>
          <div className="iCard__body">
            <h5 className="iCard__title">{nombre}</h5>
            <h5>${precio}</h5>
            <div>
              <p className="iCard__text ">{stock}</p>
            </div>
            <Link className="iCard__btn" to={"/id/" + id}>
              Detalle
            </Link>
          </div>
          {!compra ? (
            <AgregarItem initial={1} stockItems={stock} setCompra={setCompra} />
          ) : (
            <Link to={"/cart/" + compra}>
              <button>Terminar Compra</button>
            </Link>
          )}
        </div>
      </article>
    </>
  );
};

export default Item;
