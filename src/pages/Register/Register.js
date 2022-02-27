import { Check } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, desctop, tablet } from "../../Responsive";

const Container = styled.div`
  width: 100hw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: teal;
`;
const Wrapper = styled.div`
  width: 70%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  ${mobile({ padding: "0px", width: "360px" })};
  ${tablet({ padding: "0px" })};
`;
const Title = styled.h1`
  margin: 20px 0px;
  font-size: 30px;
`;
const Form = styled.form`
  min-width: 400px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  ${mobile({ minWidth: "340px", maxWidth: "370" })};
  ${tablet({ minWidth: "340px", maxWidth: "370" })};
`;
const Input = styled.input`
  width: 100%;
  margin: 10px;
  border: 0.5px solid gray;
  outline: none;
  padding: 7px 15px;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Agrement = styled.p`
  font-size: 14px;
  color: white;
`;

const Span = styled.span`
  color: white;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Title className="text-white">CREATE AN ACCOUNT</Title>
          <Input type="text" required placeholder="Name" />
          <Input type="text" required placeholder="Username" />
          <Input type="email" required placeholder="Email" />
          <Input type="password" required placeholder="Create password" />
          <Input type="password" required placeholder="Confirm password" />
          <Agrement>
            <input style={{ marginRight: "10px" }} type="checkbox" required />
            By creating an account, I concent to the of my personal data in
            accordance to <b>PRIVACY POLICY</b>
          </Agrement>
          <ButtonContainer>
            <Input
              className="bg-danger text-white"
              type="reset"
              value="RESET"
            />
            <Input
              className="bg-success text-white"
              type="submit"
              value="CREATE"
            />
          </ButtonContainer>
          <Span>
            Already have account?{" "}
            <Link
              style={{ color: "yellow", textDecoration: "none" }}
              to="/login"
            >
              Login
            </Link>
          </Span>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
