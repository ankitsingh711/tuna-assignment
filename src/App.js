import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from 'react-redux';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import LogIn from "./pages/login";
import Register from "./pages/register";
import Contact from "./pages/contact";
import AboutUs from "./pages/about";
import links from "./constants/NavLinks";
import Recipes from "./pages/recipes";
import store from "./store/store.js";
import { selectIsAuthenticated } from "./store/authenticationSlice.js";

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar links={links} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/recipes/:id" element={<Recipes />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
