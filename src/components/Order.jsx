import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Cargando from "../common/Cargando";
import FindeCompra from "./FindeCompra";
const Order = ({ idOrder }) => {
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const refADoc = doc(db, "orders", idOrder);
    getDoc(refADoc).then((res) => {
      const objeto = res.data();
      const objetoBien = { ...objeto, id: res.id };
      setOrder(objetoBien);
    });
  }, []);

  return <>{orders.length === 0 ? <Cargando /> : <FindeCompra orders={orders} />}</>;
};
export default Order;
