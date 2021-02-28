import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import { useLocation, } from 'react-router-dom';

function Product({ product }) {

  return (
    <div>
      <PayPalButton
        amount={product.price}
        // shippingPreference="NO_SHIPPING"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />
    </div>
  );
}

function Payments() {
  const { state: { product } } = useLocation();
  return (
    <div>
        <h2>{product.name}</h2>
        <p>{product.description} for ${product.price}</p>
      <Product product={product} />
    </div>
  );
}

export default Payments;
