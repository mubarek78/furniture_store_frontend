import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsGoogle} from 'react-icons/bs';
import {FaCcPaypal, FaCcVisa, FaCcMastercard, FaApplePay} from 'react-icons/fa';




  

const Footer = () => {
   
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="footer_left">
                                <p>
                                    <strong>mySHOP</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                                
                                    <ul className='footer_left_icon'>
                                        <li>
                                            <a href="#!"><BsFacebook size={30} /></a>
                                        </li>
                                        <li>
                                            <a href="#!"><BsTwitter size={30} /></a>
                                        </li>
                                        <li>
                                            <a href="#!"><BsLinkedin size={30} /></a>
                                        </li>
                                        <li>
                                            <a href="#!"><BsInstagram size={30} /></a>
                                        </li>
                                        <li>
                                            <a href="#!"><BsGoogle size={30} /></a>
                                        </li>
                                    </ul>
                
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            
                                <div className="footer_righte">
                                    
                                    <ul>
                                    <h3>About</h3>
                                        <li>Shop</li>
                                        <li>Delivery</li>
                                        <li>Returns</li>
                                        <li></li>
                                      
                                    </ul>
                                </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="footer_righte">
                                    
                                    <ul>
                                    <h3>WHY WE CHOOSE</h3>
                                       <li>Shipping & Return</li>
                                       <li>Secure Shopping</li>
                                       <li>Gallary</li>
                                       <li>Affiliates</li>
                                       <li>Contacts</li>  
                                    </ul>
                                </div>
            
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="footer_righte">
                                    
                                    <ul>
                                    <h3>STORE INFORMATION</h3>
                                       <li>12675 E Demo Store, Demo Store Co, USA 812404</li>
                                       <li>Call Us: 123-456-7898</li>
                                       <li>Email Us: Support@Duumy.com</li>
                                       <li>Fax: 12345678</li>
                                       <li>Follow Us</li>  
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </footer>

            <section id="footer_bottom">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-6 col-md-6 col-sm-6 col-12"> */}
                            <div className="footer_bottom_left">
                                <h6>© CopyRight 2022 <span>myShop</span></h6>
                            </div>
                        {/* </div> */}
                        {/* <div className="col-lg-6 col-md-6 col-sm-6 col-12"> */}
                            <div className="footer_bottom_right">
                            <a><FaCcPaypal size={28}/></a>
                            <a><FaCcVisa size={28}/></a> 
                           <a><FaCcMastercard size={28}/></a>
                            <a><FaApplePay size={28}/></a>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
    
        </>
    )
}

export default Footer