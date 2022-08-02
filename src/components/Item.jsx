import AgregarItem from "./AgregarItem";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { imagen, nombre, precio, stock, id } = item;
  let initial = 1;
  console.log(id);
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
          <div>
            <AgregarItem stockItems={stock} initial={initial} />
          </div>
        </div>
      </article>
      ;
    </>
  );
};

export default Item;
