import React from 'react'
import ProductCard from '../Product/ProductCard'
import { useSelector } from "react-redux";

const RelatedProduct = () => {
    let products = useSelector((state) => state.products.products);
    return (
        <>
            <section id="related_product">
                <div className="container">
                   <div className='title'>
                      <h2>Related Product</h2>
                      <div className='underline'></div>
                   </div>
                    <div className="row">
                        {products.slice(1, 5).map((data, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index} >
                                <ProductCard data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default RelatedProduct