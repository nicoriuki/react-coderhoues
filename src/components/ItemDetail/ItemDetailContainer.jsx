import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Cargando from "../../common/Cargando";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const { productId } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const refADoc = doc(db, "productos", productId);
    getDoc(refADoc).then((res) => {
      const objeto = res.data();
      const objetoBien = { ...objeto, id: res.id };
      setProductos(objetoBien);
    });
  }, []);
  return productos.length === 0 ? <Cargando /> : <ItemDetail detail={productos} />;
};

export default ItemDetailContainer;
