const { useState, useEffect } = require("react")

const GetTotalPrice = () => {
    const [productDetails,getDetails] = useState([])

    useEffect(() => {
        async function getProduct() {
          const url = 'https://fakestoreapi.com/products';
          const response = await fetch(url);
          const data = await response.json();
          getDetails(data);
          
        }
        getProduct();
      }, []);

     
     let value = 0;

     for (let i = 0; i < productDetails.length; i++) {
        let prize =productDetails[i].price;
        console.log(prize);
            value=   value+ prize;
      }
     
     console.log(value);


     return(
        <div>
            <h1>The total price for the products in https://fakestoreapi.com/products is </h1>
            <h2>{value}, you can verify in the console</h2>
        </div>
     )
}

export default GetTotalPrice