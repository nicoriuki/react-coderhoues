import { Link } from "react-router-dom";
const Terminar = () => {
  return (
    <>
      <div className="terminar">
        <Link to={"/cart/"}>
          <button>Terminar Compra</button>
        </Link>
        <Link to={"/"}>
          <button>Seguir Comprando</button>
        </Link>
      </div>
    </>
  );
};
export default Terminar;
