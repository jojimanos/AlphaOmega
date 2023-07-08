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
  onSubmit: (
    email: string,
    password: string
  ) => React.FormEventHandler<HTMLFormElement> | undefined;
  validationErrorEmail: boolean;
  validationErrorPassword: boolean;
};

const SubmitForm: React.FC<SubmitFormProps> = ({
  mode,
  helper,
  toggleText,
  setToggleText,
  onSubmit,
  validationErrorEmail,
  validationErrorPassword,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  console.log("Email", email);
  console.log("Password", password);

  return (
    <form onSubmit={() => onSubmit(email, password)}>
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
