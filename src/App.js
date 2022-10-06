import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/cart';
import Login from './pages/login';
import Signup from './pages/signup';
import Productdetail from './pages/productdetail';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ShopPage from './pages/shop';

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login setUser={setUser} />}/> 
    <Route path="/signup" element={<Signup setUser={setUser} />}/> 
    <Route path="/cart" element={<Cart />}/>
    <Route path="/shop" element={<ShopPage />}/>
    <Route path='/product-details/:id' element={<Productdetail setUser={setUser}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
