import { useState, useEffect, useContext } from "react";
import { myContext } from "../components/CartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const AgregarItem = ({ initial, producto, setCompra }) => {
  const [items, setItems] = useState(initial);
  const [stock, setStock] = useState(producto.stocks);
  const { addItem } = useContext(myContext);
  const MySwal = withReactContent(Swal);
  useEffect(() => {
    stock === 0 ? setItems(0) : setItems(initial);
  }, [stock]);

  function onAdd() {
    setStock(stock - items);
    MySwal.fire({
      title: <strong>Se Agrego al Carrito</strong>,
      html: (
        <i>
          {items} {producto.nombre} {producto.varietal} por un total de ${items * producto.precio}
        </i>
      ),
      icon: "success",
    });

    setCompra(items);
    addItem(producto.id, producto.nombre, items, producto.precio, producto.varietal, producto.stocks);
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
        {stock === 0 ? <h2>Sin Stock </h2> : <h2>Stock Disponible {stock}</h2>}
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
