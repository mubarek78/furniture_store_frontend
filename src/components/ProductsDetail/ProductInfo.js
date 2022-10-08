import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import prodata from './data'
import ReactStars from "react-rating-stars-component";
import FormInput from "./FormInput";

const ProductInfo = ({ setReviews }) => {
  const [jobs, setJobs] = useState(prodata)
  const [value, setValue] = useState(0)
  const [rev, setRev] = useState("")

  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
console.log(today)

     // Rating star
     const firstExample = {
        size: 20,
        value: 5,
        edit: true
      };

  const { tabs, dates, duties, title } = jobs[value]

  const [values, setValues] = useState({
    username: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
    //   errorMessage:
    //     "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
    //   errorMessage: "It should be a valid email address!",
      required: true,
    },

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 1,
          product_id: 1,
          comment: rev,
          reviewed_at: 0,
          rating: 4.9
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((review) => console.log(review));
        }
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values)
  };


  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.tabs}
              </button>
            )
          })}
        </div>
        {/* job info */}
        {/* <article className="job-info">
          <h3>{title}</h3>
          <h4>{tabs}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>*/}
        <div className='review'>
           <div className='reviews'>
               <h1>Reviews</h1>
           </div>
           <div className='add-review'>
               <h6>Add a Review</h6>
               <div className='pro-rating' >
               <p>Your rating: </p>
               <ReactStars {...firstExample} className="product_star"/>
               </div>
               <div id="signu">
               <form onSubmit={handleSubmit}>
               <div className='input'>
                {inputs.map((input) => (
                <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
          />
        ))}
        </div>
        <textarea placeholder='Message' id="w3review" name="review" onChange={(e) => setRev(e.target.value)} rows="8" cols="59"></textarea>
        <button>Submit</button>
      </form>
    </div>
           </div>
        </div>
      </div>
      <button type="button" className="btn">
        more info
      </button> 
    </section>
  )
}

export default ProductInfo;