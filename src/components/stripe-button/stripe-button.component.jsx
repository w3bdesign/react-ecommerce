import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  // We fetch the Stripe API key from our .env file
  const publishableKey = process.env.REACT_APP_STRIPEKEY;

  const onToken = token => {
    //console.log(token);
    alert("Testkjøp fullført. Din ordre blir ikke behandlet.");
  };
  return (
    <StripeCheckout
      label="Kjøp nå"
      name="React Nettbutikk"
      billingAddress
      shippingAddress
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEo5gcsQGp6j_bE0btl5Jg3ZckLPfzbRPqypp5ry3TWXifCkQ1&s"
      description={`Total: ${price} kr`}
      amount={priceForStripe}
      panelLabel="Kjøp nå"
      token={onToken}
      stripeKey={publishableKey}
      locale="auto"
      currency="NOK"
    />
  );
};

export default StripeCheckoutButton;
