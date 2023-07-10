import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { SetStateAction, useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

type SubmitFormProps = {
  mode: string;
  helper: string;
  toggleText: string;
  setToggleText: React.Dispatch<React.SetStateAction<string>>;
    email: string,
    emailPlaceholder: string,
    emailError: string
    password: string,
    passwordPlaceholder: string,
    passwordError: string
    notAMember: string,
    alreadyAMember: string,
    submit: string,
};

const SubmitForm: React.FC<SubmitFormProps> = ({
  mode,
  helper,
  toggleText,
  setToggleText,
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
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  console.log("Email", email);
  console.log("Password", password);

  const [validationErrorEmail, setValidationErrorEmail] =
    useState<boolean>(false);
  const [validationErrorPassword, setValidationErrorPassword] =
    useState<boolean>(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const router = useRouter();

  const SchemaValidation = (emailValue: string, passwordValue: string) => {
    setValidationErrorEmail(false);
    setValidationErrorPassword(false);
    let validSchema = true;

    if (emailValue === "") {
      setValidationErrorEmail(true);
      validSchema = false;
    }
    if (passwordValue.length === 0) {
      setValidationErrorPassword(true);
      validSchema = false;
    }
    return validSchema;
  };

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValidSchema = SchemaValidation(emailValue, passwordValue);

    if (isValidSchema) {
      try {
        const user = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
        console.log("User", user);
        const userId = localStorage.setItem("user", JSON.stringify(user));
        // router.push("/");
      } catch (error) {}
      console.log("Login");
      //firestore logic
    }
  };

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValidSchema = SchemaValidation(emailValue, passwordValue);

    if (isValidSchema) {
      try {
        const user = await createUserWithEmailAndPassword(emailValue, passwordValue);
        console.log("User", user);
        const userId = localStorage.setItem("user", JSON.stringify(user));
        // router.push("/");
      } catch (error) {}
      console.log("Login");
      //firestore logic
    }
  };

  let onHandle;

  if (mode === "Signup") {
    onHandle = onSignUp;
  } else {
    onHandle = onLogin;
  }

  return (
    <form onSubmit={onHandle}>
      <FormControl
        borderStyle="solid"
        borderColor="red.500"
        border="2px"
        padding="0.5"
        borderRadius="lg"
      >
        <Flex
          borderStyle="solid"
          borderColor="red.500"
          border="1px"
          padding="2"
          borderRadius="lg"
          display="flex"
          flexDirection="column"
        >
          <Stack spacing={3}>
            <FormLabel textAlign="center" fontSize="2xl" fontWeight={800}>
              {mode}
            </FormLabel>
            <FormLabel>{email}</FormLabel>
            <Input
              htmlSize={8}
              width={{ base: "auto", sm: "lg" }}
              size="sm"
              placeholder={emailPlaceholder}
              type={"email"}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            {validationErrorEmail ? <p>{emailError}</p> : null}
            {/* <FormHelperText>{helper}</FormHelperText> */}
            <FormLabel>{password}</FormLabel>
            <Input
              htmlSize={8}
              width={{ base: "auto", sm: "lg" }}
              size="sm"
              placeholder={passwordPlaceholder}
              type={"password"}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            {validationErrorPassword && <p>{passwordError}</p>}
            {/* <FormHelperText>{helper}</FormHelperText> */}
          </Stack>
          <Stack align="center" justify="center">
            <Button
              variant="solid"
              backgroundColor={"#EB9486"}
              width={{base: "auto", sm: "30%"}}
              // maxWidth="30%"
              margin="2px"
              onClick={() => setToggleText(toggleText === notAMember ? alreadyAMember : notAMember)}
            >
              {toggleText}
            </Button>
            <Button variant="solid" backgroundColor={"#D9DE8A"} width={{base: "auto", sm: "30%"}} margin="2px" type="submit">
              {submit}
            </Button>
          </Stack>
        </Flex>
      </FormControl>
    </form>
  );
};

export default SubmitForm;
