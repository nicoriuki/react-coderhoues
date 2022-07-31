import carritoVacio from "../../assets/carrito-lleno.png";
const CartWidget = () => {
      return (
            <>
                  <img
                        src={carritoVacio}
                        className="paciente__logo"
                        alt="Logo paciente"
                  />
                  <span className="badge rounded-circle">6</span>
            </>
      );
};

export default CartWidget;
