import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ProjetWeb from "./pages/Services/ProjetWeb";
import SiteVitrine from "./pages/Services/SiteVitrine";
import Ecommerce from "./pages/Services/Ecommerce";
import Optimisation from "./pages/Services/Optimisation";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work/:id" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Projet-sur-mesure" element={<ProjetWeb />} />
        <Route path="/Site-vitrine" element={<SiteVitrine />} />
        <Route path="/E-commerce" element={<Ecommerce />} />
        <Route path="/Optimisation" element={<Optimisation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
