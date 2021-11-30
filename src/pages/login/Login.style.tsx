import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}

  & a{
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormControl = styled.div`
  flex: 1;
  min-width: 40%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input.attrs((props) => {})`
  margin: 15px 10px 0px 0px;
  padding: 10px;
  border: 1px solid ${(props) => props.error};
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button.attrs((props) => {})`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 15px 0px;
  background-color: ${(props) => (props.dis ? "#00808096" : "teal")};
  color: white;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: ${(props) => (props.dis ? "#00808096" : "#29a5a5")};
  }
`;

export const Error = styled.p`
  color: red;
  display: block;
  font-size: 12px;
  margin: 5px 0px;
`;
