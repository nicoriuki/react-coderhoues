import { useState, useEffect } from 'react';
import productosHarcode from '../../src/helper/productos.json';
import Cargando from './../common/Cargando';
import ItemList from './ItemList';

const ItemListConteiner = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const miPromesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHarcode);
      }, 2000);
    });
    miPromesa.then((res) => {
      setProductos(res);
    });
  }, []);

  return productos.length === 0 ? <Cargando /> : <ItemList data={productos} />;
};
export default ItemListConteiner;
