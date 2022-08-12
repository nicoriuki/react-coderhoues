import { useState, useEffect, useContext } from "react";
import { myContext } from "../components/CartContext";
const AgregarItem = ({ initial, producto, setCompra }) => {
  const [items, setItems] = useState(initial);
  const [stock, setStock] = useState(producto.stock);
  const { addItem } = useContext(myContext);

  useEffect(() => {
    stock === 0 ? setItems(0) : setItems(initial);
  }, [stock]);

  function onAdd() {
    setStock(stock - items);
    alert(`se Agregaron ${items} Productos`);
    setCompra(items);
    addItem(producto.id, producto.nombre, items, producto.precio, producto.varietal, producto.stock);
  }

  function sumar() {
    setItems(items + 1);
  }
  function restar() {
    setItems(items - 1);
  }

  return (
    <>
      <div className="contadorContainer">
        <h2>Stock Disponible {stock}</h2>
        <div className="contador">
          <button disabled={items === 0} onClick={restar} className="btn-cont">
            -
          </button>
          <h3 className="cont">{items}</h3>
          <button disabled={items >= stock} onClick={sumar} className="btn-cont">
            +
          </button>
        </div>
        <div className="agregar">
          <button disabled={items === 0} onClick={onAdd} className="btnAgregar">
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </>
  );
};
export default AgregarItem;
