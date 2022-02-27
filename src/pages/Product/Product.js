import React from "react";
import styled from "styled-components";
import Announcdment from "../../components/Announcement/Announcdment";
import Footer from "../../components/Footer/Footer";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Navbar from "./../../components/Navbar/Navbar";
import shirt from "../../Images/shirt.jpg";
import { Add, Remove, ShoppingCart } from "@material-ui/icons";
// import { ShoppingCart } from "@material-ui/icons/ShoppingCart";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-itmes: center;
  min-height: 30vh;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 20px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;
const Desc = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 20px 0px;
`;
const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Filter = styled.div`
  display: flex;
  margin: 10px 0px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-right: 10px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 5px 0px 5px 5px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  width: 100px;
  padding: 5px 10px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const AmountContainer = styled.div`
  display: flex;
`;
const Icon = styled.div`
  padding-top: 5px;
`;

const Amount = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin: 0px 20px;
  border: 1px solid gray;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  border: 1px solid lightgray;
  padding: 5px 20px;
  margin: 20px 0px;
  min-width: 200px;
  background-color: white;
`;
// const FilterSizeOption = styled.option``;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcdment />
      <Wrapper>
        <ImageContainer>
          <Image src={shirt} />
        </ImageContainer>
        <InfoContainer>
          <Title>Stylish Bangladeshi Shirt</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            excepturi, assumenda nisi exercitationem ipsa ad suscipit
            architecto?
          </Desc>
          <Price>$30</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Icon>
                <Remove />
              </Icon>
              <Amount>1</Amount>
              <Icon>
                <Add />
              </Icon>
            </AmountContainer>
            <Button>
              <ShoppingCart /> Add to Cart
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
