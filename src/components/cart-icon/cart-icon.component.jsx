import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";

import toggleCartHidden from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

// We want to access toggleCartHidden from our Redux reducer:
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default connect(null, mapDispatchToProps)(CartIcon);
