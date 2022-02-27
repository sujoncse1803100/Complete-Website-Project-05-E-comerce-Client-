import React from "react";
import styled from "styled-components";
import "./Announcdment.css";

const Container = styled.div`
  text-align: center;
  align-items: center;
  background-color: teal;
  color: white;
  padding: 10px 0px;
  font-size: 14px;
  font-weight: 500;
`;

const Announcdment = () => {
  return (
    <Container>Supper deals !!! Free shipping on order over $50</Container>
  );
};

export default Announcdment;
