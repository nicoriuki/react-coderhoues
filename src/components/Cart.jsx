import { myContext } from "../components/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import papelera from "../assets/papelera.png";
import botella from "../assets/botella-vacia.jpg";
const Cart = () => {
  const { removeItem, cart, clear, modificarCantidad } = useContext(myContext);
  const total = cart.reduce((total, cartItem) => total + cartItem.precio * cartItem.cantidad, 0);
  return (
    <>
      {cart.length === 0 ? (
        <Link to="/" className="botellaVacias">
          <div>
            <img src={botella} alt="botella vacia" />
            <h2>El Carito esta vacio - Volver al Inicio</h2>
          </div>
        </Link>
      ) : (
        <div>
          <table className="tableCart">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cepa</th>
                <th>Cantidad</th>
                <th>Precio Unidad</th>
                <th>Precio Total</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.varietal}</td>
                  <td>
                    <div className="btnCantidad">
                      <button disabled={item.cantidad === 0} onClick={() => modificarCantidad(item.id, -1)}>
                        -
                      </button>
                      <p>{item.cantidad}</p>
                      <button disabled={item.cantidad >= item.stock} onClick={() => modificarCantidad(item.id, 1)}>
                        +
                      </button>
                    </div>
                  </td>
                  <td>${item.precio}</td>
                  <td>${item.precio * item.cantidad}</td>
                  <td>
                    <Link to={"/cart/"}>
                      <img src={papelera} className="papelera" alt="papelera" onClick={() => removeItem(item.id)} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="4">Total </th>
                <th> ${total}</th>
              </tr>
            </tfoot>
          </table>
          <div style={{ textAlign: "center" }}>
            <Link to={"/cart/"} onClick={() => clear()}>
              <button className="btnVaciar">Vaciar Carro</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
