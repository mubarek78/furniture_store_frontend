import React from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { TiDelete} from 'react-icons/ti';

const Cart = () => {
    let dispatch = useDispatch();
    let carts = useSelector((state) => state.products.carts);
   
    // Remove from Cart
    const rmProduct = (id) => {
        dispatch({ type: "products/removeCart", payload: { id } });
    }

    // Update Value
    const cartValUpdate = (val, id) => {
        dispatch({ type: "products/updateCart", payload: { val, id } });
    }
    
    // Total
    const cartTotal = () => {
        return carts.reduce(function (total, item) {
            return total + ((item.quantity || 1) * item.price)
        }, 0)
    }

    return (
        <>
            {carts.length
                ?
                <section id="cart" >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                            <div className="header">
                              <h3>Shopping Cart</h3>
                            </div>
                                        <table>
                                            <tbody>
                                                {carts.map((data, index) => (
                                                    <tr key={index}>
                    
                                                        <td className="thumbnel">
                                                            <Link to={`/product-details/${data.id}`}>
                                                                <img src={data.img} alt="img" />
                                                            </Link>
                                                        </td>
                                                        <td className="title">
                                                            <Link to={`/product-details/${data.id}`}>
                                                                {data.title}
                                                            </Link>
                                                        </td>
                                                        <td className="price">${data.price}.00</td>
                                                        <td className="quantity">
                                                            <p>quantity</p>
                                                            <input min="1" max="100" type="number" onChange={e => cartValUpdate(e.currentTarget.value, data.id)} defaultValue={data.quantity || 1} />
                                                        </td>
                                                        <td className="total">${data.price * (data.quantity || 1)}.00</td>
                                                        <td className="remove">
                                                           <IconContext.Provider
                                                             value={{ color: 'red', size: '50px' }}
                                                            >
                                                            <button onClick={() => rmProduct(data.id)}><TiDelete/></button>
                                                            </IconContext.Provider>
                                                        </td>
                                                    </tr>
                                                ))

                                                }
                                            </tbody>
                                        </table>        
                            </div>
                        <div className="container">
                        <div className="row">
                        <div className="col-12">
                        <div className="sub_total">
                           <div className="sub_total1">
                           <p>Subtotal</p>
                           <p className="amount">${cartTotal()}.00</p>
                           </div>
                           <div className="sub_total1">
                           <p>Shipping</p>
                           <p className="amount">$20</p>
                           </div>
                           <div className="sub_total1">
                                <p>Tax</p>
                                <p className="amount">$15</p>
                           </div>
                           <div className="sub_total1">
                                <h4>Total</h4>
                                <h4 className="amount">${cartTotal() + 20 + 15}.00</h4>
                           </div>
                           <div className="checkout_btn">
                            <Link to="/checkout-one" className="theme-btn-one btn-black-overlay btn_sm">
                               Proceed to Checkout
                            </Link>
                            </div>
                        </div>
                       </div>
                       </div>
                       </div>
            
                        </div>
                    </div>
                </section>
                : <section className="ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6  col-md-6 offset-md-3 col-sm-12 col-12">
                                <div className="empaty_cart">
                                    <h2>YOUR CART IS EMPTY</h2>
                                    <h2>Sorry Mate... No Item Found Inside Your Cart!</h2>
                                    <Link to="/shop" className="btn btn-black-overlay btn_sm">Continue Shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Cart