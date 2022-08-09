import carritoLleno from "../../assets/carrito-lleno.png";
import carritoVacio from "../../assets/carrito-vacio.png";
import { myContext } from "../../components/CartContext";
import { useContext } from "react";
const CartWidget = () => {
  const { cantidad } = useContext(myContext);

  return (
    <>
      {!cantidad ? (
        <img src={carritoVacio} className="paciente__logo" alt="Logo paciente" />
      ) : (
        <div>
          <img src={carritoLleno} className="paciente__logo" alt="Logo paciente" />
          <span className="badge rounded-circle">{cantidad}</span>
        </div>
      )}
    </>
  );
};

export default CartWidget;
