import "./App.css";
import Footer from "./common/footer/Footer";
import NavBar from "./common/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CuatroCientosCuatro from "./components/404";
import CartContext from "./components/CartContext";
import Checkout from "./components/Checkout";
import MenuDespegable from "./common/Navbar/MenuDespegable";

function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/id/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/MenuDespegable/" element={<MenuDespegable />} />
            <Route path="/*" element={<CuatroCientosCuatro />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
