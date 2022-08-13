import { useState, useEffect } from "react";
import Cargando from "./../../common/Cargando";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();
  const categoriaId = parseInt(categoria);

  useEffect(() => {
    const db = getFirestore();

    setProductos([]);
    const refAcollection = collection(db, "productos");
    getDocs(refAcollection).then((res) => {
      let objeto = res.docs;

      if (!categoria) {
        objeto = objeto.map((item) => {
          const prod = { ...item.data(), id: item.id };
          return prod;
        });
      } else {
        objeto = objeto.map((item) => {
          const prod = { ...item.data(), id: item.id };
          return prod;
        });
        objeto = objeto.filter((producto) => producto.categoriaId === categoriaId);
      }

      setProductos(objeto);
    });
  }, [categoria]);

  return productos.length === 0 ? <Cargando /> : <ItemList data={productos} />;
};
export default ItemListContainer;
