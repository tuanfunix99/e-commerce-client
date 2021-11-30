import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
  Error,
  FormControl,
} from "./Register.style";
import { Validator } from "../../utils/validator";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { userActions } from "../../actions/all.action";
import Message from '../../components/ui/Alert';
import { useNavigate } from 'react-router-dom';

interface IUserInput {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  confirm: string;
}

interface IValid {
  errors: string[];
  check: boolean;
}

const Register = () => {
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.user);
  const nav = useNavigate();

  const [userInput, setUserInput] = useState<IUserInput>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    confirm: "",
  });

  const validState: IValid = {
    errors: [],
    check: false,
  };

  const [firstNameValid, setFirstNameValid] = useState<IValid>(validState);
  const [lastNameValid, setLastNameValid] = useState<IValid>(validState);
  const [usernameValid, setUserNameValid] = useState<IValid>(validState);
  const [emailValid, setEmailValid] = useState<IValid>(validState);
  const [passwordValid, setPasswordValid] = useState<IValid>(validState);
  const [confirmValid, setConfirmValid] = useState<IValid>(validState);
  const [formValid, setFormValid] = useState<boolean>(true);

  useEffect(() => {
    if (
      firstNameValid.check &&
      lastNameValid.check &&
      usernameValid.check &&
      passwordValid.check &&
      emailValid.check &&
      confirmValid.check
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    firstNameValid,
    lastNameValid,
    emailValid,
    usernameValid,
    passwordValid,
    confirmValid,
  ]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case "firstName":
        setFirstNameValid(
          new Validator(userInput.firstName)
            .required("First name is required")
            .run()
        );
        break;
      case "lastName":
        setLastNameValid(
          new Validator(userInput.lastName)
            .required("Last name is required")
            .run()
        );
        break;
      case "username":
        setUserNameValid(
          new Validator(userInput.username)
            .required("Username is required")
            .run()
        );
        break;
      case "email":
        setEmailValid(
          new Validator(userInput.email)
            .required("Email is required")
            .email("Email not valid")
            .run()
        );
        break;
      case "password":
        setPasswordValid(
          new Validator(userInput.password)
            .required("Password is required")
            .min(8, "Password at least 8 chracters")
            .max(64, "Password at most 64 chracters")
            .run()
        );
        break;
      case "confirm":
        setConfirmValid(
          new Validator(userInput.confirm)
            .required("Confirm is required")
            .match(userInput.password, "Confirm not match")
            .run()
        );
        break;
      default:
        return null;
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userActions.registerUser({ user: userInput, navigate: nav }))
  };

  const displayErrorMessage = (errors: string[]) => {
    if (errors.length > 0) {
      return errors.map((error, key) => {
        return <Error key={key}>{error}</Error>;
      });
    }
  };

  console.log(loading)

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {loading && <Message severity="info">Loading...</Message> }
        {error && <Message severity="error">{error}</Message> }
        <Form method="POST" onSubmit={onSubmitHandler}>
          <FormControl>
            <Input
              onChange={onChangeHandler}
              onKeyUp={onKeyUpHandler}
              type="text"
              name="firstName"
              placeholder="first name"
              error={firstNameValid.errors.length > 0 ? "red" : ""}
            />
            {displayErrorMessage(firstNameValid.errors)}
          </FormControl>
          <FormControl>
            <Input
              onChange={onChangeHandler}
              onKeyUp={onKeyUpHandler}
              type="text"
              name="lastName"
              placeholder="last name"
              error={lastNameValid.errors.length > 0 ? "red" : ""}
            />
            {displayErrorMessage(lastNameValid.errors)}
          </FormControl>
          <FormControl>
            <Input
              onChange={onChangeHandler}
              onKeyUp={onKeyUpHandler}
              type="text"
              name="username"
              placeholder="username"
              error={usernameValid.errors.length > 0 ? "red" : ""}
            />
            {displayErrorMessage(usernameValid.errors)}
          </FormControl>
          <FormControl>
            <Input
              onChange={onChangeHandler}
              onKeyUp={onKeyUpHandler}
              type="text"
              name="email"
              placeholder="email"
              error={emailValid.errors.length > 0 ? "red" : ""}
            />
            {displayErrorMessage(emailValid.errors)}
          </FormControl>
          <FormControl>
            <Input
              onChange={onChangeHandler}
              onKeyUp={onKeyUpHandler}
              type="password"
              name="password"
              placeholder="password"
              error={passwordValid.errors.length > 0 ? "red" : "black"}
            />
            {displayErrorMessage(passwordValid.errors)}
          </FormControl>
          <FormControl>
            <Input
              onChange={onChangeHandler}
              onKeyUp={onKeyUpHandler}
              type="password"
              name="confirm"
              placeholder="confirm password"
              error={confirmValid.errors.length > 0 ? "red" : ""}
            />
            {displayErrorMessage(confirmValid.errors)}
          </FormControl>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button disabled={formValid} dis={formValid}>
            CREATE
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
