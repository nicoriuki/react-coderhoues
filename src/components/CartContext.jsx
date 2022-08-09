import { createContext, useState, useEffect } from "react";
export const myContext = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  const addItem = (id, nombre, cantidad, precio) => {
    const nuevoProd = { id, nombre, cantidad, precio };
    setCart([...cart, nuevoProd]);
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
    cart.find((item) => (item.id === id ? true : false));
  };

  return (
    <>
      <myContext.Provider value={{ cart, cantidad, setCart, addItem, clear, removeItem, isInCart }}>{children}</myContext.Provider>
    </>
  );
}
