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

type SubmitFormProps = {
  mode: string;
  helper: string;
  toggleText: boolean;
  setToggleText: React.Dispatch<React.SetStateAction<boolean>>;
};

const SubmitForm: React.FC<SubmitFormProps> = ({
  mode,
  helper,
  toggleText,
  setToggleText,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  console.log("Email", email);
  console.log("Password", password);
  
  const [validationErrorEmail, setValidationErrorEmail] =
    useState<boolean>(false);
  const [validationErrorPassword, setValidationErrorPassword] =
    useState<boolean>(false);

  const SchemaValidation = (email: string, password: string) => {
    setValidationErrorEmail(false);
    setValidationErrorPassword(false);
    let validSchema = true

    if (email === "") {
      setValidationErrorEmail(true);
      validSchema = false;
    }
    if (password.length === 0) {
      setValidationErrorPassword(true);
      validSchema = false;
    }
    return validSchema
  };

  const onLogin = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    //validate the input data
    // console.log("Login");

    let isValidSchema = SchemaValidation(email, password)

    if (isValidSchema)
      try {
        console.log("Success")
      } catch (error: any) {
        console.log("Create User Error", error.message)
      }
      // try {
      // const user = await signInWithEmailAndPassword(auth, email, password);
      // console.log(user);
      // const userId = localStorage.setItem("user", JSON.stringify(user));
      // router.push("/");
      // } catch (error) {
      // setError(
      // "There was an error when signing in. Please check email and password."
      // );
      console.log("Login");

    //firestore logic
  };

  const onSignUp = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    //validate the input data
    // console.log("Signup");

    let isValidSchema = SchemaValidation(email, password)

    if (isValidSchema)
      try {
        console.log("Success")
      } catch (error: any) {
        console.log("Create User Error", error.message)
      }
      // try {
      // const user = await signInWithEmailAndPassword(auth, email, password);
      // console.log(user);
      // const userId = localStorage.setItem("user", JSON.stringify(user));
      // router.push("/");
      // } catch (error) {
      // setError(
      // "There was an error when signing in. Please check email and password."
      // );
      console.log("Login");
    //firestore logic
  };

  return (
    <form onSubmit={onSignUp}>
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
          display="grid"
          gridColumn="auto"
        >
          <Stack spacing={3}>
            <FormLabel>{mode}</FormLabel>
            <FormLabel>{"Email"}</FormLabel>
            <Input
              htmlSize={8}
              width="lg"
              size="sm"
              placeholder={"email"}
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            {validationErrorEmail ? <p>Email is invalid</p> : null}
            <FormHelperText>{helper}</FormHelperText>
            <FormLabel>{"Password"}</FormLabel>
            <Input
              htmlSize={8}
              width="lg"
              size="sm"
              placeholder={"password"}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            {validationErrorPassword && <p>Password is invalid</p>}
            <FormHelperText>{helper}</FormHelperText>
          </Stack>
          <Stack align="center" justify="center">
            <Button
              width="30%"
              margin="2px"
              onClick={() => setToggleText(!toggleText)}
            >
              {"toggle"}
            </Button>
            <Button width="30%" margin="2px" type='submit'>
              Submit
            </Button>
          </Stack>
        </Flex>
      </FormControl>
    </form>
  );
};

export default SubmitForm;
