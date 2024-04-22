import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Navbar from "./components/Navbar/index.js";
import Footer from "./components/Footer/index.js";
import Home from "./pages/home/index.jsx";
import LogInForm from "./pages/login/index.jsx"; // Correct import
import Register from "./pages/register/index.jsx";
import Contact from "./pages/contact/index.jsx";
import AboutUs from "./pages/about/index.jsx";
import links from "./constants/NavLinks.js";
import Recipes from "./pages/recipes/index.jsx";
import store from "./store/store.js";
import PrivateRoute from "./components/PrivateRoute/index.js";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar links={links} />
        <Routes>
          <Route exact path="/" element={<PrivateRoute Component={Home} />} />
          <Route exact path="/login" element={<LogInForm />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/contact"
            element={<PrivateRoute Component={Contact} />}
          />
          <Route
            exact
            path="/about-us"
            element={<PrivateRoute Component={AboutUs} />}
          />
          <Route
            exact
            path="/recipes/:id"
            element={<PrivateRoute Component={Recipes} />}
          />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
