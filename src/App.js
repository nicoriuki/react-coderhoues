import "./App.css";
import Footer from "./common/footer/Footer";
import NavBar from "./common/Navbar/Navbar";
import ItemDetalContainer from "./components/ItemDetalContainer";
/* import ItemListConteiner from "./components/ ItemListConteiner"; */

function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListConteiner /> */}
      <ItemDetalContainer />
      <Footer />
    </>
  );
}

export default App;
