import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";

import { Routes, Route, Navigate } from "react-router-dom";
import CheckoutSuccess from "./pages/Checkout-Success";
import CheckoutFailure from "./pages/Checkout-Failure";

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
      <Route path="/product/" element={<Product />} />
      <Route path="/product/:_id" element={<Product />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/checkout-failure" element={<CheckoutFailure />} />
    </Routes>
  );
};

export default App;
