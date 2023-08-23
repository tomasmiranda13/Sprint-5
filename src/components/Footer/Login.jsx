import React, { useState } from "react";
import Button from "../Button";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
    setIsEmailSent(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setIsEmailSent(true);
      setEmail("");
    }
  };

  return (
    <div>
      <div className="log-container" id="sign-in">
        <div className="h-p-container">
          <h2>Get early acces today</h2>
          <p>
            It only take aminute to sign up and our free tier y extremelly
            generous if you have any questions, our support team would be happy
            to help you
          </p>
        </div>
        <form
          action="#"
          onSubmit={handleFormSubmit}
          className="input-container"
        >
          <input
            value={email}
            type="email"
            name=""
            id=""
            onChange={handleEmailChange}
          />
          <Button text="Get started for free" />
        </form>
        {!isValid && (
          <p className="error">Please enter a valid email address</p>
        )}
        {isEmailSent && <p className="success">¡Submitted successfully!</p>}
      </div>
    </div>
  );
}
export default Login;
