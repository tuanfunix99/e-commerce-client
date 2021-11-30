import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./App.scss";
import Register from "./pages/register/Register";
import ProductList from "./pages/product/ProductList";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { useAppDispatch } from "./app/hooks";
import { userActions } from './actions/all.action';
import Verify from "./pages/verify/Verify";
import ForgotPassword from "./pages/forgot/ForgotPassword";

const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.loadUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </div>
  );
};

export default App;
