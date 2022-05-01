import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../src/responsive.js";

import { useSelector } from "react-redux";
const Container = styled.div`
  height: 60px;
  background-color: #fff6ea;
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    display: "flex",
    flexWrap: "wrap",

    padding: "10px 0px",
    justifyContent: "start",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({
    marginLeft: "0px",
  })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background-color: #fff6ea;
  ${mobile({
    width: "45px",
  })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "24px",
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: 1.2,
    justifyContent: "flex-start",
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;

const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
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
          <Logo onClick={() => navigate("/")}>Board.</Logo>
        </Center>
        <Right>
          <MenuItem onClick={() => navigate("/register")}>Register</MenuItem>
          <MenuItem onClick={() => navigate("/login")}>Sign In</MenuItem>
          <MenuItem>
            <Badge
              onClick={() => navigate("/cart")}
              badgeContent={cartQuantity}
              color="success"
            >
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
