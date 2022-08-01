import { useEffect, useState } from "react";
import productosHarcode from "../helper/productos.json";
import ItemDetail from "./ItemDetail";
import Cargando from "./../common/Cargando";
const ItemDetalContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const miPromesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHarcode.vinos.filter((producto) => producto.id === 12));
      }, 2000);
    });
    miPromesa.then((res) => {
      setProductos(res);
    });
  }, []);

  console.log(productos);
  return productos.length === 0 ? <Cargando /> : <ItemDetail detail={productos[0]} />;
};

export default ItemDetalContainer;
