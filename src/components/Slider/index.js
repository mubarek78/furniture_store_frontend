import React from 'react'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import {closeSubmenu } from "../../features/navSettings";
import { useDispatch} from "react-redux";
import slides from './data';


const Slid = () => {
  const dispatch = useDispatch();
  
    let settings = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            }
       
          },
           {
            breakpoint: 600, 
            settings: {
              slidesToShow: 1,
            }
          },
           {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };

      const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
          dispatch(closeSubmenu());
        }
      };

    return (
        <>
    <section id="slider" onMouseOver={handleSubmenu}>
      <Slider {...settings}>
      {slides.map((data, index) => (
        <div className={`${data.slide} ${data.bg}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                <div className="slider_content">
                <h5> {data.price}</h5>
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                  <a><Link to="/shop" className="theme-btn-one bg-black btn_sm">Shop Now</Link></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
        </Slider>
   

    </section>
        </>
    )
}

export default Slid