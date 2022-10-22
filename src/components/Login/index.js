import React, { useState } from "react";
// import "./app.css";
import FormInput from "../Signup/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/user";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hundleResource = (user) =>{
    // setUser(user)
    dispatch(login({type: 'user/login', payload: user}));
    navigate("/");
    // console.log(user)
  }

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => hundleResource(user));
        }
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    
  };

  return (
    <div id="signup">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
