import "./App.css";
import Footer from "./common/footer/Footer";
import NavBar from "./common/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Cart from "./components/Cart";
import CuatroCientosCuatro from "./components/404";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/id/:productId" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart/:cantidad" element={<Cart />} />
          <Route path="/*" element={<CuatroCientosCuatro />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
