import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100hw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
`;

const Wrapper = styled.div`
  width: 360px;
  heoght: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 30px;
  color: red;
`;

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Ooops...404</Title>
        <Title>Page not found !!!</Title>
        <Link style={{ textDecoration: "none" }} to="/home">
          Click to go home page
        </Link>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
