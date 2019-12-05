import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  // We fetch the Stripe API key from our .env file
  const publishableKey = process.env.REACT_APP_STRIPEKEY;

  return (
      
  )
};
