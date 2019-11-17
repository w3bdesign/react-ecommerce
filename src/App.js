import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

class App extends React.Component {
  constructor() {
    super();
    // Set default state (currentUser) when App is constructed
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  // TODO Fix memory leak here?
  componentDidMount() {
    // Add user object to state when Google authentication state has changed.
    // This allows us to be able to use the data later in our application.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // Add listener to Firestore DocumentSnapShot event and set the state to the currentUser
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          // console.log(this.state);
        });
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
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
          <Header currentUser={this.state.currentUser} />
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

export default App;
