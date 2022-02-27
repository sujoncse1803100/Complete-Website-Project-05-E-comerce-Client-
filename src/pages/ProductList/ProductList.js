import React from "react";
import styled from "styled-components";
import Navbar from "./../../components/Navbar/Navbar";
import Announcdment from "./../../components/Announcement/Announcdment";
import Products from "./../../components/Products/Products";
import NewsLetter from "./../../components/NewsLetter/NewsLetter";
import Footer from "./../../components/Footer/Footer";

const Container = styled.div``;
const Title = styled.h3`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Filter = styled.div``;

const FilterText = styled.span`
  font=size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcdment />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>
              color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Bule</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>

          <Select>
            <Option disabled selected>
              size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option disabled selected>
              Newest
            </Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
