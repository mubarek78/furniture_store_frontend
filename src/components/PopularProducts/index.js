import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from '../Product/ProductCard';
import { useSelector } from "react-redux";

const PopularProduct = () => {
  let products = useSelector((state) => state.products.products1);
//   products = products.filter(item => item.category === 'furniture')

    let settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 400, 
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
 
            breakpoint: 1324,
            settings: {
              slidesToShow: 3,
            }
          }, 
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 470,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      };
    return (
        <>
        <section id="top_products" >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="top_slider">
                    <div className="title">
                    <h2>Top Peakes For You</h2>
          <div className="underline"></div>
        </div>
                    <Slider {...settings}>
                    {products.slice(3, 9).map((data, index) =>(
                          <ProductCard data={data} key={index} />    
                     ))}
                  </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default PopularProduct