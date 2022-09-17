import React, {useState} from 'react'
import ProductCard from '../Product/ProductCard';
import { useSelector } from "react-redux";
import items from './data';
// import Categories from './Categories';


const TopProduct = () => {
    let products = useSelector((state) => state.products.products);
    const [menuItems, setMenuItems] = useState(products);

    const filterItems = (category) => {
        console.log(category)
        const newItems = products.filter((item) => item.category == category);
        setMenuItems(newItems);
        console.log(menuItems)
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
                    {/* <Categories categories={categories} filterItems={filterItems}/> */}
                </div>
                <div className="col-lg-12">
                    <div className="tabs_el_wrapper">
                        <div className="tab-content">
                          <div id="new_arrival" className="tab-pane fade show in active">
                              <div className="row">
                                {menuItems.map((data, index) =>(
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                    <ProductCard data={data} />
                            </div>
                                ))}
                              </div>
                          </div>
                          {/* <div id="trending" className="tab-pane fade">
                          <div className="row"> 
                                {products.slice(0, 5).map((data, index) =>(
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                      <ProductCard data={data} />
                              </div>
                                ))}
                              </div>
                          </div>
                          <div id="best_sellers" className="tab-pane fade">
                          <div className="row">
                                {products.slice(3, 5).map((data, index) =>(
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                    <ProductCard data={data} />
                            </div>
                                ))}
                              </div>
                          </div>
                          <div id="featured" className="tab-pane fade">
                          <div className="row">
                                {products.slice(5, 11).map((data, index) =>(
                                     <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                     <ProductCard data={data} />
                             </div>
                                ))}
                              </div>
                          </div>
                          <div id="on_sall" className="tab-pane fade">
                          <div className="row">
                                {products.slice(6, 13).map((data, index) =>(
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                      <ProductCard data={data} />
                              </div>
                                ))}
                              </div>
                          </div>*/}
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
