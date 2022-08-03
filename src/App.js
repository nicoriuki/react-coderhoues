import "./App.css";
import Footer from "./common/footer/Footer";
import NavBar from "./common/Navbar/Navbar";
import ItemDetalContainer from "./components/ItemDetalContainer";
import ItemListConteiner from "./components/ItemListConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/categoria/:categoria" element={<ItemListConteiner />} />
          <Route path="/id/:productId" element={<ItemDetalContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart/:cantidad" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
