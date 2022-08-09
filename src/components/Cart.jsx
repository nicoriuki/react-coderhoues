import { myContext } from "../components/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const { removeItem, cart, clear } = useContext(myContext);

  console.log(cart);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
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
              <td>{item.cantidad}</td>
              <td>${item.precio}</td>
              <td>${item.precio * item.cantidad}</td>
              <td>
                <Link to={"/cart/"}>
                  <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Total comprado </div>
      <div>
        <Link to={"/cart/"} onClick={() => clear()}>
          <button>vaciar</button>
        </Link>
      </div>
    </>
  );
};
export default Cart;
