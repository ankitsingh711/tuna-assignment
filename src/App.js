import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import LogIn from "./pages/login";
import Contact from "./pages/contact";
import AboutUs from "./pages/about";
import links from "./constants/NavLinks";
import Recipes from "./pages/recipes";



const App = () => {
  return (
    <Router>
      <Navbar links={links}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/recipes/:id" element={<Recipes />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;