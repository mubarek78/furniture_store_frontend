import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RatingStar } from "rating-star";
import { useDispatch } from "react-redux";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineExpandAlt} from 'react-icons/ai';
import { BsCartPlus} from 'react-icons/bs';


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
                            <li><a href="#" onClick={() => addToFav(props.data.id)} ><AiOutlineHeart size={25}/></a></li>
                            <li><a href="#" onClick={() => addToCart(props.data.id)}><BsCartPlus size={25}/></a></li>
                            <Link to={`/product-details/${props.data.id}`}>
                            <li><a href="#" onClick={() => addToCart(props.data.id)}><AiOutlineExpandAlt size={25}/></a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="product_desc_box">
                    <Link to={`/product-details/${props.data.id}`}><a><h5 className="product_title">{props.data.title}</h5></a></Link>
                        <span className="product_price">${props.data.price}.00</span>
                        <div className="product_rating">
                        <span className="product_rating_num">({props.data.price-87})</span><RatingStar maxScore={5} rating={props.data.rating} id="rating-star-furniture" />          
                    </div>
                    
                </div>
            </div>

            

        </>
    )
}

export default ProductCard