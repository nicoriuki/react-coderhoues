import { useEffect, useState } from "react";
import productosHarcode from "../helper/productos.json";
import ItemDetail from "./ItemDetail";
import Cargando from "./../common/Cargando";
import { useParams } from "react-router-dom";
const ItemDetalContainer = () => {
  const [productos, setProductos] = useState([]);
  const { productId } = useParams();
  useEffect(() => {
    const miPromesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHarcode.vinos.filter((producto) => producto.id == productId));
      }, 2000);
    });
    miPromesa.then((res) => {
      setProductos(res);
      console.log(productos);
    });
  }, []);

  console.log(productId);
  return productos.length === 0 ? <Cargando /> : <ItemDetail detail={productos[0]} />;
};

export default ItemDetalContainer;
