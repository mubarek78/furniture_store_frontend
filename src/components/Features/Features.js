import React from "react";
import styles from "../../assets/css/features.css"

const Features = () => {
  return (
    <div className="">
      <div className="">
        <img className={styles.icon} src="./images/shop.svg" alt="" />
        <h3>Shop Online</h3>
        <p>Shop what you love anytime,anywhere at your fingertips </p>
      </div>
      <div className="">
        <img className="" src="./images/clock.svg" alt="" />
        <h3>Return policy</h3>
        <p>Products are returnable within the applicable return window </p>
      </div>
      <div className="">
        <img className="" src="./images/dollar.svg" alt="" />
        <h3>Free shipping</h3>
        <p>As a user of AntiQ enjoy FREE & Fast delivery across INDIA</p>
      </div>
      <div className="">
        <img className="" src="./images/wallet.svg" alt="" />
        <h3>Payment methods</h3>
        <p>Shop what you love anytime,anywhere at your fingers tips </p>
      </div>
    </div>
  );
};

export default Features;