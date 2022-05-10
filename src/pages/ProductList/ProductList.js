import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./../../components/Navbar/Navbar";
import Announcdment from "./../../components/Announcement/Announcdment";
import Products from "./../../components/Products/Products";
import NewsLetter from "./../../components/NewsLetter/NewsLetter";
import Footer from "./../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { mobile, desctop } from "../../Responsive";

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
  min-width: 150px;
  padding: 10px;
  margin-right: 20px;
  margin-top: 10px;
  ${mobile({ marginTop: "20px 0px" })};
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    setFilter({
      ...filter,
      [e.target.name.toLowerCase()]: e.target.value.toLowerCase(),
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Navbar />
      <Announcdment />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option>color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Bule</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>

          <Select name="size" onChange={handleFilters}>
            <Option>size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select name="sort " onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
