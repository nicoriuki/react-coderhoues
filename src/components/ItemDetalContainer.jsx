import { useEffect, useState } from "react";
import productosHarcode from "../helper/productos.json";
import ItemDetail from "./ItemDetail";
import Cargando from "./../common/Cargando";
const ItemDetalContainer = () => {
  const [productos, setProductos] = useState([]);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    let misProductos = new Promise((resolve) => {
      setTimeout(() => {
        const producto = productosHarcode;
        return resolve(producto);
      }, 2000);
    });

    function obtenerProductos(listaProducto) {
      return listaProducto.then((producto) => {
        return producto.vinos;
      });
    }

    const productosObtenidos = obtenerProductos(misProductos);

    productosObtenidos.then(setProductos);
  }, []);

  useEffect(() => {
    if (productos.vinos !== 0) {
      let item = productos.find((item) => item.id === 12);
      setDetail(item);
    }
  }, [productos]);

  return detail === undefined ? <Cargando /> : <ItemDetail detail={detail} />;
};

export default ItemDetalContainer;
