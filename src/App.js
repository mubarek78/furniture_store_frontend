import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/cart';
import Login from './pages/login';
import Signup from './pages/signup';
import Productdetail from './pages/productdetail';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShopPage from './pages/shop';
import { signup } from "./features/user";
import { fetchData } from "./features/products";
import prodata from './components/ProductsDetail/data';

function App() {
  const dispatch = useDispatch();
  const hundleResource = (user) =>{
    dispatch(signup({type: 'user/signup', payload: user}));

  }
  const hundleFecth = (product) =>{
    // console.log(product)
    dispatch(fetchData({type: 'products/fetchData', payload: product}));

  }

  useEffect(() => {
    fetch("/products").then((response) => {
      if (response.ok) {
        response.json().then((product) => hundleFecth(product));
      }
    });
  });
 
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => hundleResource(user));
      }
    });
  }, []);

 

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login />}/> 
    <Route path="/signup" element={<Signup />}/> 
    <Route path="/cart" element={<Cart />}/>
    <Route path="/shop" element={<ShopPage />}/>
    <Route path='/product-details/:id' element={<Productdetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
