import React, { useState } from 'react'


function FormInput(props) {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, id, ...inputProps } = props;
  
    const handleFocus = (e) => {
      setFocused(true);
    };

    return (
      <div id="reviewForm">
        <label>{label}</label>
        <input
          {...inputProps}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
          
        />
        <span>{errorMessage}</span>
      </div>
    );
  };



export default FormInput;
