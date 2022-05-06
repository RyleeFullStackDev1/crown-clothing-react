import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithEmailPassword,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInWithEmailPassword(email, password);
      setCurrentUser(user);
      resetForm();
    } catch (error) {
      console.log("Code", error.code);
      switch (error.code) {
        case "auth/user-not-found":
          alert(
            "No account exists with username or password provided. Please try again."
          );
          break;
        case "auth/wrong-password":
          alert("Your password is incorrect. Please try again.");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with you email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
