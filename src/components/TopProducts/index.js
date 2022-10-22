import React, {useState} from 'react'
import ProductCard from '../Product/ProductCard';
import { useSelector } from "react-redux";
import items from './data';



const TopProduct = () => {
    let products = useSelector((state) => state.products.products1);
    const [menuItems, setMenuItems] = useState(products);

    const filterItems = (category) => {
        const newItems = products.filter((item) => item.group == category);
        setMenuItems(newItems);
      };
      
    return (
        <>
        <section id="top_Product" >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="btn-container">
        {items.map((item, index) => {
             return (
           <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(item.category)}
          >
            {item.category}
          </button>
        );
      })}
    </div>
                   
                </div>
                <div className="col-lg-12">
                        <div className="tab-content">
                              <div className="row">
                                {menuItems.map((data, index) =>(
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                    <ProductCard data={data} />
                            </div>
                                ))}
                              </div>
                        </div> 
                </div>
            </div>
        </div>
    </section>


        </>
    )
}

export default TopProduct
