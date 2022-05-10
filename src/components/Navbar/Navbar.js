import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Navbar.css";
import { mobile, desctop } from "../../Responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import defaultUserImage from "../../Images/user.png";

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
  width: 90%;
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
  margin-left: 15px;
  ${desctop({ marginLeft: "25px", fontSize: "15px" })};
  ${mobile({ marginLeft: "25px", fontSize: "15px" })};
`;

const ProfilePicture = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser: user } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Brand>
            <Link to="/" className="link">
              Querist
            </Link>
          </Brand>
          <SearchContainer className="form-control">
            <SearchIcon style={{ color: "gray", fontSize: 30 }} />
            <Input placeholder="Search" />
          </SearchContainer>
        </Left>

        <Right>
          {!user?.email && (
            <MenuItem>
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </MenuItem>
          )}

          <MenuItem>
            {!user?.email ? (
              <Link to="/login" className="link">
                LOGIN
              </Link>
            ) : (
              <ProfilePicture
                src={user?.image ? user.image : defaultUserImage}
              />
            )}
          </MenuItem>

          <MenuItem>
            <Badge badgeContent={quantity} color="secondary">
              <Link style={{ textDecoration: "none" }} to="/cart">
                <ShoppingCartIcon style={{ width: "25px", color: "gray" }} />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
