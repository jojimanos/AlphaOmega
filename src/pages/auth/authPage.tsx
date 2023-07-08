import React, { useState } from "react";
import SubmitForm from "./submitForm";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  const [toggleText, setToggleText] = useState<boolean>(false);
  

  return (
    <>
      {toggleText === false ? (
        <SubmitForm
          helper="Help our community grow strong"
          toggleText={toggleText}
          setToggleText={setToggleText}
          mode="Login"
        />
      ) : (
        <SubmitForm
          helper="Help our community grow strong"
          toggleText={toggleText}
          setToggleText={setToggleText}
          mode="Signup"
        />
      )}
    </>
  );
};

export default AuthPage;
