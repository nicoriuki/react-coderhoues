import { useState, useEffect } from "react";
import productosHarcode from "../../src/helper/productos.json";
import Cargando from "./../common/Cargando";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();
  useEffect(() => {
    const miPromesa = new Promise((res, rej) => {
      setProductos([]);
      setTimeout(() => {
        if (!categoria) {
          res(productosHarcode.vinos);
        } else {
          res(productosHarcode.vinos.filter((producto) => producto.varietal === categoria));
        }
      }, 2000);
    });
    miPromesa.then((res) => {
      setProductos(res);
    });
  }, [categoria]);

  return productos.length === 0 ? <Cargando /> : <ItemList data={productos} />;
};
export default ItemListContainer;
