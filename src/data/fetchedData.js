import React, {useEffect, useState} from "react";


function fetchedData() {
let [prodata, setProdata] = useState(["dataaaaaa"])
    useEffect(() => {
    fetch("/products").then((response) => {
      if (response.ok) {
        response.json().then((product) => setProdata(product));
      }
    });
  }, []);
console.log(prodata)
  return (
    <>
    {prodata}
    </>
  )
}

export default fetchedData