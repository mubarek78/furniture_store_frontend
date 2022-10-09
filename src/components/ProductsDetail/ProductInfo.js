import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FaAngleDoubleRight } from 'react-icons/fa'
import prodata from './data'
import ReactStars from "react-rating-stars-component";
import FormInput from "./FormInput";


const ProductInfo = () => {
  // const dispatch = useDispatch();
  const [jobs, setJobs] = useState(prodata)
  const [value, setValue] = useState(0)
  const [rev, setRev] = useState("")
  let   [rate, setRate] = useState(5)
  const status = useSelector((state) => state.user.status);
  const user = useSelector((state) => state.user.user);
  let Id = useSelector((state) => state.products.single.id);
  console.log(Id)
  let [error, setError] = useState("")
  console.log(user)
  console.log(Id)
  
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
        edit: true,
        starCount: {value},
        onChange: newValue => {
           setRate(newValue)
           console.log(rate)
        }
      };
     

  // const { tabs, dates, duties, title } = jobs[value]

  const [values, setValues] = useState({
    username: user.username,
    email: user.email,
    errorMessage: "eror"
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      pattern: status == true,
      value: user.username
      },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      value: user.email
      },

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
   status ? (fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          product_id: Id,
          comment: rev,
          reviewed_at: 0,
          rating: rate
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((review) => console.log(review));
        }
      })): setError("Please Register or login first to review this product")
  };

 
  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  //   console.log(values)
  // };

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
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.tabs}
              </button>
            )
          })}
        </div>
 
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
          />
        ))}
        </div>
        <textarea placeholder='Message' id="w3review" name="review" onChange={(e) => setRev(e.target.value)} rows="8" cols="59"></textarea>
        <p>{error}</p>
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