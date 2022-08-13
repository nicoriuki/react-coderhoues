import { createContext, useState, useEffect } from "react";
export const myContext = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  const addItem = (id, nombre, cantidad, precio, varietal, stock) => {
    const nuevoProd = { id, nombre, cantidad, precio, varietal, stock };
    if (isInCart(id)) {
      modificarCantidad(id, cantidad);
    } else {
      setCart([...cart, nuevoProd]);
    }
  };
  const modificarCantidad = (id, cantidad) => {
    let index = cart.findIndex((el) => el.id === id);
    let prod = cart[index];
    prod.cantidad = prod.cantidad + cantidad;
    const newCart = [...cart];
    newCart.splice(index, 1, prod);
    setCart([...newCart]);
  };
  useEffect(() => {
    let cant = 0;
    cart.map((item) => (cant += item.cantidad));
    setCantidad(cant);
  }, [cart]);
  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }
  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let productos = [...cart];
    const found = productos.find((item) => item.id === id);
    if (found) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <myContext.Provider value={{ cart, cantidad, setCart, addItem, clear, removeItem, isInCart, modificarCantidad }}>{children}</myContext.Provider>
    </>
  );
}
