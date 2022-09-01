import { createContext, useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
export const myContext = createContext();

function CartContext({ children }) {
  const [cart, setCart] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [screen, setScreen] = useState(window.innerWidth);
  const [categorias, setCategorias] = useState([]);

  const total = cart.reduce((total, cartItem) => total + cartItem.precio * cartItem.cantidad, 0);
  useEffect(() => {
    JSON.parse(localStorage.getItem("cart")) && setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);
  useEffect(() => {
    const db = getFirestore();

    const refAcollection = collection(db, "categorias");
    getDocs(refAcollection).then((res) => {
      let objeto = res.docs;

      objeto = objeto.map((item) => {
        return { ...item.data(), id: item.id };
      });
      setCategorias(objeto);
    });
  }, []);
  useEffect(() => {
    function handleResize() {
      setScreen(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const addItem = (id, nombre, cantidad, precio, varietal, stock) => {
    const nuevoProd = { id, nombre, cantidad, precio, varietal, stock };
    if (isInCart(id)) {
      modificarCantidad(id, cantidad);
    } else {
      setCart([...cart, nuevoProd]);
      localStorage.setItem("cart", JSON.stringify([...cart, nuevoProd]));
    }
  };
  const modificarCantidad = (id, cantidad) => {
    let index = cart.findIndex((el) => el.id === id);
    let prod = cart[index];
    prod.cantidad = prod.cantidad + cantidad;
    const newCart = [...cart];
    newCart.splice(index, 1, prod);
    setCart([...newCart]);
    localStorage.setItem("cart", JSON.stringify([...newCart]));
  };
  useEffect(() => {
    let cant = 0;
    cart.map((item) => (cant += item.cantidad));
    setCantidad(cant);
  }, [cart]);
  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
    localStorage.setItem("cart", JSON.stringify(cart.filter((item) => item.id !== id)));
  }
  const clear = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
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
  const stockTotal = (id, stock) => {
    let total;
    if (cart.find((producto) => producto.id === id)) {
      const product = cart.filter((producto) => producto.id === id);
      total = stock - product[0].cantidad;
    } else {
      total = stock;
    }

    return total;
  };
  return (
    <>
      <myContext.Provider value={{ cart, cantidad, setCart, addItem, clear, removeItem, isInCart, modificarCantidad, total, stockTotal, screen, categorias }}>{children}</myContext.Provider>
    </>
  );
}
export default CartContext;
