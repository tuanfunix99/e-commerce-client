import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  FormControl,
  Error,
} from "./Login.style";
import { Validator } from "../../utils/validator";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { userActions } from "../../actions/all.action";
import Message from "../../components/ui/Alert";
import { useNavigate, Link } from "react-router-dom";

interface IUserInput {
  email: string;
  password: string;
}

interface IValid {
  errors: string[];
  check: boolean;
}


const Login = () => {
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.user);
  const nav = useNavigate();
  const isLogin = localStorage.getItem('isLogin');

  const [userInput, setUserInput] = useState<IUserInput>({
    email: "",
    password: "",
  });

  const validState: IValid = {
    errors: [],
    check: false,
  };

  const [emailValid, setEmailValid] = useState<IValid>(validState);
  const [passwordValid, setPasswordValid] = useState<IValid>(validState);
  const [formValid, setFormValid] = useState<boolean>(true);

  useEffect(() => {
    if (passwordValid.check && emailValid.check) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailValid, passwordValid]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
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
      default:
        return null;
    }
  };

  const displayErrorMessage = (errors: string[]) => {
    if (errors.length > 0) {
      return errors.map((error, key) => {
        return <Error key={key}>{error}</Error>;
      });
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userActions.loginUser({ user: userInput, navigate: nav }))
  };

  if(isLogin){
    nav('/');
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        {loading && <Message severity="info">Loading...</Message>}
        {error && <Message severity="error">{error}</Message>}
        <Form onSubmit={onSubmitHandler}>
          <FormControl>
            <Input
              onChange={onChangeHandler}
              onKeyUp={onKeyUpHandler}
              type="text"
              placeholder="email"
              name="email"
              error={emailValid.errors.length > 0 ? "red" : ""}
            />
            {displayErrorMessage(emailValid.errors)}
          </FormControl>
          <FormControl>
            <Input
              onChange={onChangeHandler}
              onKeyUp={onKeyUpHandler}
              type="password"
              placeholder="password"
              name="password"
              error={passwordValid.errors.length > 0 ? "red" : "black"}
            />
            {displayErrorMessage(passwordValid.errors)}
          </FormControl>
          <Button disabled={formValid} dis={formValid}>
            LOGIN
          </Button>
          <Link to="/forgot">DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link to="/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
