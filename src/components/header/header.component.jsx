import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

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
    </div>
  </div>
);

export default Header;
