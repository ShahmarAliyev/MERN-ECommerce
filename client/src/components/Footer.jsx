import React from "react";
import styled from "styled-components";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  margin-bottom: 0;
  padding-bottom: 0;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  padding: 5px;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;

  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff6ea" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 30%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> Board.</Logo>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Description>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Sources</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Page</ListItem>
          <ListItem>WishList</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact </Title>
        <ContactItem>
          <LocationOnOutlinedIcon style={{ marginRight: "10px" }} />
          4020 State Highway 42
        </ContactItem>
        <ContactItem>
          <PhoneOutlinedIcon style={{ marginRight: "10px" }} /> +1 224 256 4225
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: "10px" }} />
          contact@saliyev2019@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/F8SJWpS/Screenshot-2.png" />
      </Right>
    </Container>
  );
};

export default Footer;
