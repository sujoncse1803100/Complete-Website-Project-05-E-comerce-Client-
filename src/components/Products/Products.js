import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../Data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NothingContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/product/findAll?category=${cat}`
            : "http://localhost:5000/api/product/findAll"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      !(filter.color === "color" && filter.size === "size") &&
      setFilteredProduct(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );

    cat &&
      (filter.color === "color" || filter.size === "size") &&
      setFilteredProduct(products);
  }, [cat, products, filter]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {!cat ? (
        products.map((p, i) => (
          <Product image={popularProducts[i].image} item={p} key={i} />
        ))
      ) : filteredProduct.length > 0 ? (
        filteredProduct.map((p, i) => (
          <Product image={popularProducts[i].image} item={p} key={i} />
        ))
      ) : (
        <NothingContainer>
          <h1 style={{ justifyContent: "center" }}>No Products Available</h1>
          <p>please go back or refresh the page</p>
        </NothingContainer>
      )}
    </Container>
  );
};

export default Products;
