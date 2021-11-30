import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Title,
  Button,
  Form,
  FormControl,
  Input,
  Error,
} from "./ForgotPassword.style";
import { Validator } from "../../utils/validator";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { userActions } from "../../actions/all.action";
import { userReducerActions } from "../../reducers/user.reducer";
import Message from "../../components/ui/Alert";
import { useNavigate } from "react-router-dom";

interface IValid {
  errors: string[];
  check: boolean;
}

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.user);
  const nav = useNavigate();
  const validState: IValid = {
    errors: [],
    check: false,
  };

  const [emailInput, setEmailInput] = useState<string>("");
  const [emailValid, setEmailValid] = useState<IValid>(validState);
  const [formValid, setFormValid] = useState<boolean>(true);

  useEffect(() => {
    dispatch(userReducerActions.reset());
    if (emailValid.check) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailValid, dispatch]);

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case "email":
        setEmailValid(
          new Validator(emailInput)
            .required("Email is required")
            .email("Email not valid")
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
    dispatch(userActions.forgotPassword({ email: emailInput, navigate: nav }));
  };

  return (
    <Container>
      <Wrapper>
        <Title>FORGOT PASSWORD</Title>
        {loading && <Message severity="info">Loading...</Message>}
        {error && <Message severity="error">{error}</Message>}
        <Form onSubmit={onSubmitHandler}>
          <FormControl>
            <Input
              onChange={(e: any) => setEmailInput(e.target.value)}
              onKeyUp={onKeyUpHandler}
              type="text"
              placeholder="Your email register"
              name="email"
              error={emailValid.errors.length > 0 ? "red" : ""}
            />
          </FormControl>
          {displayErrorMessage(emailValid.errors)}
          <Button disabled={formValid} dis={formValid}>
            SEND
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ForgotPassword;
