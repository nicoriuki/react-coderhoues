import { useState } from "react";
import { myContext } from "../components/CartContext";
import { useContext } from "react";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, total } = useContext(myContext);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [idCompra, setIdCompra] = useState();
  function terminarCompra() {
    const order = { buyer: { name, tel, email }, cart, total: total };
    const db = getFirestore();
    const refCollection = collection(db, "orders");

    addDoc(refCollection, order).then((res) => {
      setIdCompra(res.id);
      console.log(res.id);
      cart.map((item) => updateDoc(doc(db, "productos", item.id), { stock: item.stock - item.cantidad }));
    });
  }

  return (
    <>
      <div ClassName="checkout">
        <div className="checkout-titulo">
          <h2>Checkout</h2>
        </div>
        <div className="checkout-input">
          <input type={"text"} placeholder="nombre" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="checkout-input">
          <input type={"tel"} placeholder="telefono" value={tel} onChange={(e) => setTel(e.target.value)} />
        </div>
        <div className="checkout-input">
          <input type={"email"} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="checkout-btn">
          <button className="btnVaciar" onClick={terminarCompra}>
            Terminar
          </button>
        </div>
        <div className="checkout-input">{idCompra && <p>Tu id de compra es {idCompra}</p>}</div>
      </div>
    </>
  );
};
export default Checkout;
