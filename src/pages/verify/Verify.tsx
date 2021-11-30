import React from "react";
import { Container, Title, Wrapper, Button } from "./Verify.style";
import Message from "../../components/ui/Alert";

const Verify = () => {
  return (
    <Container>
      <Wrapper>
        <Title>VERIFY EMAIL</Title>
        <Message severity="success">
          We send a mail to your email.Please check your email
        </Message>
        <Button href="https://mail.google.com/">CHECK EMAIL</Button>
      </Wrapper>
    </Container>
  );
};

export default Verify;
