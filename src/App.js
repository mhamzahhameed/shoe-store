import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import Women from "./components/Women";
import WomenHome from "./components/WomenHome";
import ProductDetails from "./components/ProductDetails";
import Contact from "./components/Contact";
import HomeDetails from "./components/HomeDetails";
import "materialize-css/dist/css/materialize.min.css";
import HomeHome from "./HomeHome";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={<HomeHome />} />
          <Route path=':id' element={<HomeDetails />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='women' element={<Women />}>
          <Route path='/women/' element={<WomenHome />} />
          <Route path=':id' element={<ProductDetails />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
