import carritoLleno from "../../assets/carrito-lleno.png";
import carritoVacio from "../../assets/carrito-vacio.png";
import { myContext } from "../../components/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { cantidad } = useContext(myContext);

  return (
    <>
      <Link to="/cart/">
        {!cantidad ? (
          <img src={carritoVacio} className="paciente__logo" alt="Logo paciente" />
        ) : (
          <div>
            <img src={carritoLleno} className="paciente__logo" alt="Logo paciente" />
            <span className="badge rounded-circle">{cantidad}</span>
          </div>
        )}
      </Link>
    </>
  );
};

export default CartWidget;
