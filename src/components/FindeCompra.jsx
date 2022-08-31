import botella from "../assets/final.jpg";
import { Link } from "react-router-dom";

const FindeCompra = ({ orders }) => {
  console.log(orders);
  return (
    <>
      <div className="orders">
        <div className="order">
          Gracias <b>{orders.buyer.name} </b>Por su compra
        </div>
        <div className="order">
          Se van a comunica por su email <b>{orders.buyer.email}</b> o Telefono <b>{orders.buyer.tel}</b>
        </div>
        <div className="order">
          no olvide su Id de compra es <b>{orders.id}</b>
        </div>
        <div className="order orders_productos">
          {orders.cart.map((producto) => (
            <div className="" key={producto.id}>
              {producto.cantidad}. {producto.nombre} , {producto.varietal}, valor x U ${producto.precio} , total ${producto.precio * producto.cantidad}
            </div>
          ))}
        </div>
        <div className="order orders__total">
          Total de la compra: <span>${orders.total}</span>
        </div>
      </div>
      <Link to="/" className="botellaVacias">
        <div>
          <img src={botella} alt="fin de compra" />
          <h2>Gracias por su Compra</h2>
        </div>
      </Link>
    </>
  );
};
export default FindeCompra;
