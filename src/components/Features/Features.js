import React from "react";
import {MdLocalShipping, MdKeyboardReturn, MdPayment, MdShoppingCart} from 'react-icons/md';
import { IconContext } from "react-icons";




const Features = () => {
  return (
    <div className="features">
    <div className="container">
            <div className="row">

      <div className="col-lg-3 col-md-6 col-12">
      <div className="">
      <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
      <div>
        <MdShoppingCart size={40}/>
        </div>
        </IconContext.Provider>
        <h3>Shop Online</h3>
        <p>Shop what you love anytime,anywhere at your fingertips </p>
      </div>
      </div>

      <div className="col-lg-3 col-md-6 col-12">
      <div className="">
        <MdKeyboardReturn size={40}/>
        <h3>Return policy</h3>
        <p>Products are returnable within the applicable return window </p>
      </div>
      </div>

      <div className="col-lg-3 col-md-6 col-12">
      <div className="">
        <MdLocalShipping size={40}/>
        <h3>Free shipping</h3>
        <p>As a user of myShop enjoy FREE & Fast delivery across USA</p>
      </div>
      </div>

      <div className="col-lg-3 col-md-6 col-12">
      <div className="">
        <MdPayment size={40} color={'red'}/>
        <h3>Payment methods</h3>
        <p>Shop what you love anytime,anywhere at your fingers tips </p>
      </div>
      </div>
     
      </div>
      </div>
    </div>
  );
};

export default Features;