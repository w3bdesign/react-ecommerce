import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { selectCurrentUser } from "../src/redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

// Connect Redux to our header
import { connect } from "react-redux";

import { setCurrentUser } from "../src/redux/user/user.actions";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout-component";

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
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// Redirect user if signed in, so we cant access /signin

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

/*
As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store (state).

Dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.

With React Redux, your components never access the store directly - connect does it for you. 
React Redux gives you two ways to let components dispatch actions:

- By default, a connected component receives props.dispatch and can dispatch actions itself.
- Connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, 
and pass those functions as props to your component.

https://react-redux.js.org/using-react-redux/connect-mapdispatch
*/

export default connect(mapStateToProps, mapDispatchToProps)(App);
