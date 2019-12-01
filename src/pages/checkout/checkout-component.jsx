import React from "react";
import "./checkout.styles.scss";

// We need to access the values needed for the checkout page from our Redux state
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Produkt</span>
      </div>
      <div className="header-block">
        <span>Beskrivelse</span>
      </div>
      <div className="header-block">
        <span>Antall</span>
      </div>
      <div className="header-block">
        <span>Pris</span>
      </div>
      <div className="header-block">
        <span>Fjern</span>
      </div>
    </div>

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>Total {total} kr</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);
