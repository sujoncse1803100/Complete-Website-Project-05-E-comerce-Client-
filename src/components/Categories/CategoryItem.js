import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, tablet, desctop } from "../../Responsive";

const Container = styled.div`
  // flex: 1;
  height: 70vh;
  width: 30.33%;
  position: relative;
  margin: 5px;
  ${tablet({ width: "100%", padding: "20px" })};
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: scroll;
  top: 90px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: white;
  cursor: pointer;
  color: gray;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`} className="link">
        <Image src={item.image} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
