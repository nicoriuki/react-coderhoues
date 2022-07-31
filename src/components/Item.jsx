import AgregarItem from "./AgregarItem";

const Item = ({ item }) => {
  let initial = 1;
  return (
    <>
      <article className="item">
        <div className="iCard">
          <div>
            <img className="iCard__img" src={item.imagen} alt={item.nombre} />
          </div>
          <div className="iCard__body">
            <h5 className="iCard__title">
              {item.nombre}
              {"  "}
              <span>${item.precio}</span>
            </h5>
            <div>
              <p className="iCard__text ">{item.stock}</p>
            </div>
            <button className="iCard__btn">Detalle</button>
          </div>
          <div>
            <AgregarItem stockItems={item.stock} initial={initial} />
          </div>
        </div>
      </article>
      ;
    </>
  );
};

export default Item;
