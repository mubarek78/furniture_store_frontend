import React, { useState } from 'react'
import ProductCard from '../Product/ProductCard'
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Form } from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';
import { sortbyprice, filterbystock, byFastDelivery, filterbysearch} from "../../features/filter";

const Shop = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter.value);
    let sort = filter.sort;
    let byStock = filter.byStock;
    let FastDelivery = filter.byFastDelivery;
    let searchQuery = filter.filterbysearch;
    const [products, setProducts] = useState(useSelector((state) => state.products.products1))
    const [page, setPage] = useState(1)
    let allData = [...useSelector((state) => state.products.products1)];

    const randProduct = (page) => {
        if (page) {
            let data = allData.sort((a, b) => 0.5 - Math.random())
            setProducts(data);
            setPage(page);
        }
    }

    const transformProducts = () => {
        let sortedproducts = products;
    
        if (sort) {
          sortedproducts = sortedproducts.sort((a, b) =>
            sort == "lowToHigh" ? a.id - b.id : b.id - a.id
          );
        }
        if (!byStock) {
          sortedproducts = sortedproducts.filter((prod) => prod.inStock);
        }
    
        if (FastDelivery) {
          sortedproducts = sortedproducts.filter((prod) => prod.fastDelivery);
        }
    
        if (searchQuery) {
          sortedproducts = sortedproducts.filter((prod) =>
            prod.title.toLowerCase().includes(searchQuery)
          );
        }
    
        console.log(sortedproducts);
        return sortedproducts;
      };



    return (
        <>
            <section id="shop_section">
                <div className='filter'>
                <h4>Search</h4>
            <div id='s' className="App">
            <label htmlFor="copy-button">
            <input 
            type="search"
            placeholder="Search a product..." 
            aria-label="search" 
            onChange={(e) => {
                dispatch(filterbysearch({ payload: e.target.value }));
              }}
            />
            <a id='icon'><FaSearch size={20}/></a>
           </label>
          </div>
        <h4>Sort</h4>
        <div className='form-check'>
        <Form.Check
        inline
        label="Ascending"
        name="group1"
        type="radio"
        id={`inline-1`}
        className="inline-1"
        onChange={() => {
          dispatch(sortbyprice({ sort: "lowToHigh" }));
        }}
      />
      <Form.Check
        inline
        label="Descending"
        name="group1"
        type="radio"
        id={`inline-2`}
        className="inline-2"
        // checked={sort === "highToLow" ? true : false}

        onChange={() => {
          dispatch(sortbyprice({ sort: "highToLow" }));
        }}
      />
    </div>
    
     <h4>Out of stock</h4>
     <div className='form-check'>
      <Form.Check
        inline
        label="Include Out of Stock"
        name="group1"
        type="checkbox"
        id={`inline-3`}
        onChange={() => {
          dispatch(filterbystock());
        }}

        // checked={byStock}
      />
      </div>
      <h4>Fast delivery</h4>
      <div className='form-check'>
      <Form.Check
        inline
        label="Fast Delivery Only"
        name="group1"
        type="checkbox"
        id={`inline-4`}
        onChange={() => {
          dispatch(byFastDelivery());
        }}
        // checked={byFastDelivery}
      />
      </div>
                </div>
                <div className="container">
                    <div className="row">
                        {transformProducts().map((data, index) => (
                            <div className="col-lg-4 col-md-6  col-12" key={index}>
                                <ProductCard data={data} />
                            </div>
                        ))}
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li className="page-item" onClick={(e) => { randProduct(page > 1 ? page - 1 : 0) }}>
                                    <a className="page-link" href="#!" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                    </a>
                                </li>
                                <li className={"page-item " + (page === 1 ? "active" : null)} onClick={(e) => { randProduct(1) }}><a className="page-link" href="#!">1</a></li>
                                <li className={"page-item " + (page === 2 ? "active" : null)} onClick={(e) => { randProduct(2) }}><a className="page-link" href="#!">2</a></li>
                                <li className={"page-item " + (page === 3 ? "active" : null)} onClick={(e) => { randProduct(3) }}><a className="page-link" href="#!">3</a></li>
                                <li className="page-item" onClick={(e) => { randProduct(page < 3 ? page + 1 : 0) }}>
                                    <a className="page-link" href="#!" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop