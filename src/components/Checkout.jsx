import { useState } from "react";
import { myContext } from "../components/CartContext";
import { useContext } from "react";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import Order from "./Order";

const Checkout = () => {
  const { cart, total, clear } = useContext(myContext);
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
      /* cart.map((item) => updateDoc(doc(db, "productos", item.id), { stock: item.stock + item.cantidad })); */
    });
    clear();
  }
  /*  if (cart.length === 0) {
    return (
      <>
        <div>no hay carrito</div>
      </>
    );
  } */
  const handleChangeName = (e) => {
    if (e.target.value.match("^[a-zA-Z ]*$") != null) {
      setName(e.target.value);
    } else {
      console.log("nooo");
    }
  };
  const handleChangeTel = (e) => {
    if (e.target.value.match("^[0-9]*(.?)[ 0-9]+$") != null) {
      setTel(e.target.value);
    } else {
      console.log("nooo");
    }
  };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChangeEmail = (event) => {
    if (!isValidEmail(event.target.value)) {
      console.log("niii");
    }

    setEmail(event.target.value);
  };
  return (
    <>
      {!idCompra ? (
        <div className="checkout">
          <div className="checkout-titulo">
            <h2>Checkout</h2>
          </div>
          <div className="checkout-input">
            <input type={"text"} placeholder="nombre" value={name} onChange={(e) => handleChangeName(e)} />
          </div>
          <div className="checkout-input">
            <input type={"tel"} placeholder="telefono" value={tel} onChange={(e) => handleChangeTel(e)} />
          </div>
          <div className="checkout-input">
            <input type={"email"} placeholder="email" value={email} onChange={(e) => handleChangeEmail(e)} />
          </div>
          <div className="checkout-btn">
            <button className="btnVaciar" onClick={terminarCompra}>
              Terminar
            </button>
          </div>
          <div className="checkout-input">{idCompra && <p>Tu id de compra es {idCompra}</p>}</div>
        </div>
      ) : (
        <Order idOrder={idCompra} />
      )}
    </>
  );
};

export default Checkout;
