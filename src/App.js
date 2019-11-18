import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// Connect Redux to our header
import { connect } from "react-redux";

import { setCurrentUser } from "../src/redux/user/user.actions";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  // TODO Fix memory leak here?
  componentDidMount() {
    // Add user object to state when Google authentication state has changed.
    // This allows us to be able to use the data later in our application.

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // Add listener to Firestore DocumentSnapShot event and set the Redux store to the currentUser
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  // Call unsubscribeFromAuth() to update the state when we destroy the App component
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  // Build the routes for our application with React Router
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
