import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import RelatedProduct from './RelatedProduct'
import ProductInfo from './ProductInfo';
import { useParams } from 'react-router-dom';
import { FaPlus, FaMinus, FaRegHeart, FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

const initialState = {
    prod: null,
    error: null,
    status: "pending",
  };

const ProductDetails = () => {
    

    let dispatch = useDispatch();
    const [{ prod, error, status }, setState] = useState(initialState);
    const { id } = useParams();

    dispatch({ type: "products/getProductById", payload: { id } });
    // let product = useSelector((state) => state.products.single);
    // console.log(product)
 useEffect(() => {
    setState(initialState);
    fetch(`/products/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((prod) =>
          setState({ prod, error: null, status: "resolved" })
        );
      } 
      else {
        r.json().then((message) =>
          setState({ prod: null, error: message.error, status: "rejected" })
        );
      }
    });
  }, [id]);





 




//  console.log(prod)

    // Rating star
    const firstExample = {
        size: 30,
        value: 5,
        edit: true
      };

    // Add to cart
    const addToCart = async (id) => {
        dispatch({ type: "products/addToCart", payload: { id } })
    }

    // Add to Favorite
    const addToFav = async (id) => {
        dispatch({ type: "products/addToFav", payload: { id } })
    }


   

    const [count, setCount] = useState(1)

    // const [img, setImg] = useState(product.img)

    const incNum = () => {
        setCount(count + 1)
    }
    const decNum = () => {
        if (count > 1) {
            setCount(count - 1)
        } 
    }
      if (status === "pending") return <h1>Loading...</h1>;

        if (status === "rejected") {
    if (error === "Maximum pageview limit reached") {
        return <h1>{error}</h1>;
    } else {
      return <h1>{error}</h1>;
    }
  }

    const {img, title, price, group, description, rating, reviews} = prod;
    console.log({img, title, price, group, description, rating, reviews})

    return (
        <>
            <section id="product_detail">
                <div className="container">
                    <div className="row wraper">
                        <div className="col-lg-6">
                            <div className="product_detail_img">
                                <img src={img} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product_detail_content">
                                    <h2>{title}</h2>
                                    <div className="product_rating">
                                        <ReactStars {...firstExample} className="product_star"/>
                                        <span className="review_number">({price-99} Reviews)</span>
                                    </div>
                                    <h3 className='price'>${price}.00 </h3>
                                    <p className='desc'>{description}</p>
                                    <div className="size_selection_box">
                                    <span className='dimention'>Dimension: </span>
                                        <select name="product" className="dimention_select">
                                            <option value="volvo">Size</option>
                                            <option value="xl">XL</option>
                                            <option value="small">S</option>
                                            <option value="medium">M</option>
                                            <option value="learz">L</option>
                                        </select>
                                    </div>
                       
                                    <div className="product_quantity_box">
                                    <form id="product_quantity">
                                            <div className="quantity_change">
                                                <div className="input-group-button">
                                                    <button type="button" className="button" onClick={decNum}>
                                                        <FaMinus />
                                                    </button>
                                                </div>
                                                <input className="form-control" type="text" value={count} readOnly />
                                                <div className="input-group-button">
                                                    <button type="button" className="button" onClick={incNum}>
                                                       <FaPlus />
                                                    </button>
                                                </div>
                                            </div>
                                        
                                    </form>
                                    <div className="Product_link_btns">
                                        <button className='add_to_fav' onClick={() => addToFav(id)}><FaRegHeart size={16}/></button>
                                        <button className='add_to_cart' onClick={() => addToCart(id)}><FaShoppingCart size={20} />  Add To Cart </button>
                                        
                                    </div>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductInfo reviews={reviews}/>
            <RelatedProduct />
        </>
    )
}

export default ProductDetails