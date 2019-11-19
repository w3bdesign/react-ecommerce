import React from "react";
import { Link } from "react-router-dom";

// Connect Redux to our header
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

// Build the header component with React Router (Link)
const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        BUTIKK
      </Link>
      <Link className="option" to="/shop">
        KONTAKT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          UTLOGGING
        </div>
      ) : (
        <Link className="option" to="/signin">
          INNLOGGING
        </Link>
      )}
      <CartIcon />
    </div>
  </div>
);

// We want to access our currentUser from our Redux reducer:
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
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
