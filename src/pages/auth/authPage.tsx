import React, { useState } from "react";
import SubmitForm from "./submitForm";

type AuthPageProps = {
  login: string;
  signup: string;
  email: string;
  emailPlaceholder: string;
  emailError: string;
  password: string;
  passwordPlaceholder: string;
  passwordError: string
  notAMember: string;
  alreadyAMember: string;
  submit: string;
};

const AuthPage: React.FC<AuthPageProps> = ({
  login,
  signup,
  email,
  emailPlaceholder,
  emailError,
  password,
  passwordPlaceholder,
  passwordError,
  notAMember,
  alreadyAMember,
  submit,
}) => {
  const [toggleText, setToggleText] = useState<boolean>(true);

  return (
    <>
      {toggleText === true ? (
        <SubmitForm
          helper="Help our community grow strong"
          toggleText={toggleText}
          setToggleText={setToggleText}
          mode={login}
          email={email}
          emailPlaceholder={emailPlaceholder}
          emailError={emailError}
          password={password}
          passwordPlaceholder={passwordPlaceholder}
          passwordError={passwordError}
          notAMember={notAMember}
          alreadyAMember={alreadyAMember}
          submit={submit}
        />
      ) : (
        <SubmitForm
          helper="Help our community grow strong"
          toggleText={toggleText}
          setToggleText={setToggleText}
          mode={signup}
          email={email}
          emailPlaceholder={emailPlaceholder}
          emailError={emailError}
          password={password}
          passwordPlaceholder={passwordPlaceholder}
          passwordError={passwordError}
          notAMember={notAMember}
          alreadyAMember={alreadyAMember}
          submit={submit}
        />
      )}
    </>
  );
};

export default AuthPage;
