import { useState, useEffect } from "react";
import data from "../../src/helper/productos.json";
import Cargando from "./../common/Cargando";
import ItemList from "./ItemList";

const ItemListConteiner = () => {
      const [productos, setProductos] = useState([]);

      useEffect(() => {
            let misProductos = new Promise((resolve) => {
                  setTimeout(() => {
                        const producto = data;
                        return resolve(producto);
                  }, 2000);
            });

            function obtenerProductos(listaPacientes) {
                  return listaPacientes.then((paciente) => {
                        return paciente;
                  });
            }

            const productosObtenidos = obtenerProductos(misProductos);

            productosObtenidos.then(setProductos);
      }, []);

      return productos.length === 0 ? (
            <Cargando />
      ) : (
            <ItemList data={productos} />
      );
};
export default ItemListConteiner;
