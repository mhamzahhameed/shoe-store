import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import Others from "./components/Others";
import OthersHome from "./components/OthersHome";
import OthersDetails from "./components/OthersDetails";
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
        <Route path='others' element={<Others />}>
          <Route path='/others/' element={<OthersHome />} />
          <Route path=':id' element={<OthersDetails />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
