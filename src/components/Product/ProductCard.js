import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RatingStar } from "rating-star";
import { useDispatch } from "react-redux";
const ProductCard = (props) => {
    let dispatch = useDispatch();

    // Add to cart
    const addToCart = async (id) => {
        dispatch({ type: "products/addToCart", payload: { id } })
    }

    // Add to Favorite
    const addToFav = async (id) => {
        dispatch({ type: "products/addToFav", payload: { id } })
    }

    
    return (
        <>
            <div className="product_card">
                <div className="product_card_img">
                    <Link to={`/product-details/${props.data.id}`}>
                        <img src={props.data.img} alt="" />
                    </Link>
                    <div className="product_buttons_box">
                        <ul className="product_buttons_btn">
                            <li><a href="#" onClick={() => addToFav(props.data.id)} ><i className="fa fa-heart"></i></a></li>
                            {/* <li><a href="#" onClick={() => setModalShow(true)} > <i className="fa fa-arrows-alt"></i></a></li> */}
                            <li><a href="#" onClick={() => addToCart(props.data.id)}><i className="fa fa-cart-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="product_desc_box">
                    <h5 className="product_title"><Link to={`/product-details/${props.data.id}`}>{props.data.title}</Link></h5>
                        <span className="product_price">${props.data.price}.00</span>
                        <div className="product_rating">
                        <span className="product_rating_num">({props.data.rating.count})</span><RatingStar maxScore={5} rating={props.data.rating.rate} id="rating-star-furniture" />          
                    </div>
                    
                </div>
            </div>

            

        </>
    )
}

export default ProductCard