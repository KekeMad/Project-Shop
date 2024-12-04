import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import Landingpage from "./components/Landingpage";
import Productpage from "./components/Productpage";
import Cartpage from "./components/Cartpage";
import RegistrationForm from "./components/RegistrationForm";
import Loginpage from "./components/Loginpage"; 
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/login" element={<Loginpage />} /> {/* Add Login route */}
          <Route path="/products" element={<Productpage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/landing" element={<Landingpage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
