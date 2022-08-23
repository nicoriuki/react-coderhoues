import { Link } from "react-router-dom";
import { myContext } from "../CartContext";
import { useContext } from "react";
const Item = ({ item }) => {
  const { stockTotal } = useContext(myContext);

  const { imagen, nombre, precio, stock, id, descripcion } = item;
  return (
    <>
      <Link className="linkCard" to={"/id/" + id}>
        <article className="item">
          <div className="iCard">
            <div>
              <img className="iCard__img" src={imagen} alt={nombre} />
            </div>
            <div className="iCard__body">
              <h5 className="iCard__title">{nombre}</h5>
              <h5>${precio}</h5>
              <div>
                <p className="iCard__text ">{descripcion}</p>
              </div>
              <div className="iCard__footer ">{stockTotal(id, stock) === 0 ? <p>Sin Stock </p> : <p>Unidades disponibles{stockTotal(id, stock)}</p>}</div>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};

export default Item;
