import React, { useState } from "react";
import SubmitForm from "./submitForm";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  const [toggleText, setToggleText] = useState<boolean>(false);
  const [validationErrorEmail, setValidationErrorEmail] =
    useState<boolean>(false);
  const [validationErrorPassword, setValidationErrorPassword] =
    useState<boolean>(false);

  const SchemaValidation = (email: string, password: string) => {
    setValidationErrorEmail(false);
    setValidationErrorPassword(false);

    if (email.length === 0) {
      setValidationErrorEmail(true);
    }
    if (password.length === 0) {
      setValidationErrorPassword(true);
    }
  };

  const onLogin = (email: string, password: string) => {
    //validate the input data

    SchemaValidation(email, password);

    //firestore logic

    console.log("Login");
  };

  const onSignUp = (email: string, password: string) => {
    //validate the input data

    SchemaValidation(email, password);

    //firestore logic

    console.log("Signup");
  };

  return (
    <>
      {toggleText === false ? (
        <SubmitForm
          helper="Help our community grow strong"
          toggleText={toggleText}
          setToggleText={setToggleText}
          mode="Login"
          onSubmit={onLogin}
          validationErrorEmail={validationErrorEmail}
          validationErrorPassword={validationErrorPassword}
        />
      ) : (
        <SubmitForm
          helper="Help our community grow strong"
          toggleText={toggleText}
          setToggleText={setToggleText}
          mode="Signup"
          onSubmit={onSignUp}
          validationErrorEmail={validationErrorEmail}
          validationErrorPassword={validationErrorPassword}
        />
      )}
    </>
  );
};

export default AuthPage;
