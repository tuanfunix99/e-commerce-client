import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  text-align: center;
  ${mobile({ width: "75%" })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const Button = styled.a`
  width: 40%;
  border: none;
  padding: 15px 20px;
  display: block;
  text-decoration: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  transition: 0.5s;
  margin: auto;
  margin-top: 20px;
  &:hover{
    background-color: #29a5a5;
  }
`;
