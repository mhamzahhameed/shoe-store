import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import Men from "./components/Men";
import Women from "./components/Women";
import ProductDetails from "./components/ProductDetails";
import ProductHome from "./components/ProductHome";
import Contact from "./components/Contact";

import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='women' element={<Women />} />
        <Route path='men' element={<Men />}>
          <Route path='/men/' element={<ProductHome />} />
          <Route path=':id' element={<ProductDetails />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
