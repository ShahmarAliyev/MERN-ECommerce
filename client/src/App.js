import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Routes>
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/" replace /> : <Register />}
      />

      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/*" element={<ProductList />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/*" element={<Product />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
