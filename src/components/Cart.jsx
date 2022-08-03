import { useParams } from "react-router-dom";
const Cart = () => {
  const { cantidad } = useParams();
  return (
    <>
      <div>Total comprado {cantidad}</div>
    </>
  );
};
export default Cart;
