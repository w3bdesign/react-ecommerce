import React from "react";

// Connect Redux to our header
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";

import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink
} from "./header.styles";

// Build the header component with React Router (Link)
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">BUTIKK</OptionLink>
      <OptionLink to="/shop">KONTAKT</OptionLink>

      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>UTLOGGING</OptionDiv>
      ) : (
        <OptionLink to="/signin">INNLOGGING</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

// We want to access our currentUser from our Redux reducer. A more advanced method of destructuring (nested values).

/*
createStructuredSelector takes an object whose properties are input-selectors and returns a structured selector. 
The structured selector returns an object with the same keys as the inputSelectors argument, but with the selectors replaced with their values.
In other words, this function is handy when we are using multiple selectors in the same mapStateToProps function.
*/

const mapStateToProps = state =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

/*
The connect() function connects a React component to a Redux store.

It provides its connected component with the pieces of the data it needs from the store (state), and the functions it can use to dispatch actions to the store.

It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.

If your mapStateToProps function is declared as taking two parameters, it will be called whenever the store state changes or when the wrapper 
component receives new props (based on shallow equality comparisons). 
It will be given the store state as the first parameter, and the wrapper component's props as the second parameter.

https://react-redux.js.org/api/connect
*/
export default connect(mapStateToProps)(Header);
