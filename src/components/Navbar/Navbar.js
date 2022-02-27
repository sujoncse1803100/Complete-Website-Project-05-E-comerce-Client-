import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Navbar.css";
import { mobile, desctop } from "../../Responsive";

const Container = styled.div`
  height: 60px;
  overflow: scroll;
  width: 100%;
  ${mobile({ width: "100%", height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.span`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 10px;
  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  // min-width: 100px;
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: "10px" })};
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ fontSize: "10px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: auto;
  ${desctop({ marginLeft: "25px", fontSize: "15px" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Brand>Querist</Brand>
          <SearchContainer className="form-control">
            <SearchIcon style={{ color: "gray", fontSize: 30 }} />
            <Input placeholder="Search" />
          </SearchContainer>
        </Left>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color="secondary">
              <ShoppingCartIcon style={{ width: "25px" }} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
