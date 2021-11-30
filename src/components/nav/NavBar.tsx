import React from "react";
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "./NavBar.style";
import { Search, ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../app/hooks';
import { userReducerActions } from '../../reducers/user.reducer';

const NavBar = () => {

  const dispatch = useAppDispatch();
  const isLogin = localStorage.getItem("isLogin");

  const onClickHandler = () => {
    dispatch(userReducerActions.reset());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          {!isLogin && (
            <MenuItem>
              <Link to="/register">REGISTER</Link>
            </MenuItem>
          )}
          {!isLogin && (
            <MenuItem>
              <Link to="/signin">SIGN IN</Link>
            </MenuItem>
          )}
          {isLogin && (
            <MenuItem>
              <a onClick={onClickHandler} href="api/auth/logout">
                SIGN OUT
              </a>
            </MenuItem>
          )}
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
