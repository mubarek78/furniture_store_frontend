import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/cart';
import Productdetail from './pages/productdetail';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ShopPage from './pages/shop';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/shop" element={<ShopPage />}/>
    <Route path='/product-details/:id' element={<Productdetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
