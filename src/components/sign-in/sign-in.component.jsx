import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  // Update the state when the form is submitted
  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Set default state while we wait for signInWithEmailAndPassword() to resolve
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  // Update the state when the form input changes
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Jeg har allerede en konto</h2>
        <span>Logg på med brukernavn og passord</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Epost"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Passord"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Innlogging </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google Pålogging
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
