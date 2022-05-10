import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fcf5f5;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 30px;
`;
const InputContainer = styled.div`
  width: 70%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  width: 80%;
  outline: none;
  border: none;
  padding: 10px 30px;
`;
const Button = styled.button`
  width: 20%;
  height: 100%;
  border: none;
  background-color: teal;
  color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely update from your favorite products</Description>
      <InputContainer>
        <form style={{ width: "100%", height: "100%" }}>
          <Input type="email" required className="" placeholder="Your email" />
          <Button>
            <SendIcon />
          </Button>
        </form>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
