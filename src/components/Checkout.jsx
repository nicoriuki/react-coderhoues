import { useState, useEffect, useRef } from "react";
import { myContext } from "../components/CartContext";
import { useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Order from "./Order";

const Checkout = () => {
  const { cart, total, clear } = useContext(myContext);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [idCompra, setIdCompra] = useState();
  const [datosValidosEmail, setDatosValidosEmail] = useState(false);
  const [datosValidosTel, setDatosValidosTel] = useState(false);
  const [datosValidosName, setDatosValidosName] = useState(false);
  const errormail = useRef(null);
  const errortel = useRef(null);
  const errorname = useRef(null);
  const errorMailMsg = useRef(null);
  const errorTelMsg = useRef(null);
  const errorNameMsg = useRef(null);

  useEffect(() => {
    comprobarEmail();
    comprobarTel();
    comprobarName();
  }, [email, tel, name]);

  function terminarCompra() {
    const order = { buyer: { name, tel, email }, cart, total: total };
    const db = getFirestore();
    const refCollection = collection(db, "orders");
    addDoc(refCollection, order).then((res) => {
      setIdCompra(res.id);
    });
    clear();
  }
  const comprobarEmail = () => {
    const regexEmail = /\S+@\S+\.\S+/;
    if (email === "" || !regexEmail.test(email)) {
      errormail.current.classList.add("incorrecto");
      errorMailMsg.current.classList.remove("hide");
      setDatosValidosEmail(false);
      console.log(datosValidosEmail);
    } else {
      errormail.current.classList.remove("incorrecto");
      errorMailMsg.current.classList.add("hide");
      setDatosValidosEmail(true);
      console.log(datosValidosEmail);
      return true;
    }
  };
  const comprobarTel = () => {
    const regexTel = /^[0-9]+$/;
    if (tel.length <= 5 || !regexTel.test(tel)) {
      errortel.current.classList.add("incorrecto");
      errorTelMsg.current.classList.remove("hide");
      setDatosValidosTel(false);
    } else {
      errortel.current.classList.remove("incorrecto");
      errorTelMsg.current.classList.add("hide");
      setDatosValidosTel(true);
      return true;
    }
  };
  const comprobarName = () => {
    const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/;
    if (name.length <= 3 || !regexName.test(name)) {
      errorname.current.classList.add("incorrecto");
      errorNameMsg.current.classList.remove("hide");
      setDatosValidosName(false);
    } else {
      errorname.current.classList.remove("incorrecto");
      errorNameMsg.current.classList.add("hide");
      setDatosValidosName(true);
      return true;
    }
  };

  return (
    <>
      {!idCompra ? (
        <div className="checkout">
          <div className="checkout-titulo">
            <h2>Checkout</h2>
          </div>
          <div className="checkout-input">
            <input type={"text"} ref={errorname} placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="datoError hide" ref={errorNameMsg}>
            Nombre incompleto (Tiene que tener mas de 4 caracteres)
          </div>
          <div className="checkout-input">
            <input type={"tel"} ref={errortel} placeholder="Telefono" value={tel} onChange={(e) => setTel(e.target.value)} />
          </div>
          <div className="datoError hide" ref={errorTelMsg}>
            Ingrese solo numeros Minimo 6 caracteres
          </div>
          <div className="checkout-input">
            <input ref={errormail} type={"email"} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="datoError hide" ref={errorMailMsg}>
            Por Favor ingrese un Formato de mail Correcto
          </div>
          <div className="checkout-btn">
            <button disabled={!datosValidosEmail || !datosValidosName || !datosValidosTel} className="btnVaciar" onClick={terminarCompra}>
              Terminar
            </button>
          </div>
        </div>
      ) : (
        <Order idOrder={idCompra} />
      )}
    </>
  );
};

export default Checkout;
