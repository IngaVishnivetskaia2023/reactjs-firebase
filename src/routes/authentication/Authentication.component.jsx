import React from "react";
// import { getRedirectResult } from 'firebase/auth';
import SignUpForm from "components/sign-up-form/sign-up.component";
import SignInForm from "components/sign-in-form/sign-in.component";
import "./Authentication.styles.scss";

const Authentication = () => (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );

export default Authentication;
