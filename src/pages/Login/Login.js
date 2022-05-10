import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";

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
`;
const Title = styled.h1`
  margin: 20px 0px;
  font-size: 30px;
`;
const Form = styled.form`
  height: 100%;
  min-width: 400px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7);
`;
const Input = styled.input`
  width: 100%;
  margin: 10px;
  border: 0.5px solid gray;
  outline: none;
  padding: 7px 15px;
  border-radius: 10px;
  &:makedisabled {
    color: green;
    corsur: not-allowed;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Span = styled.span`
  color: white;
`;

const Error = styled.div`
  color: red;
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  useEffect(() => {
    currentUser && navigate("/");
  }, [currentUser]);

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Title className="text-white">LOG INTO ACCOUNT</Title>
          <Input
            type="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Error>Invalid email or Password</Error>}
          <ButtonContainer>
            <Input
              className="bg-danger text-white"
              type="reset"
              value="RESET"
            />
            <Input
              className="bg-success text-white"
              type="submit"
              value="LOGIN"
              makeDisabled={isFetching}
            />
          </ButtonContainer>
          <Span>
            Dont't have account?{" "}
            <Link
              style={{ color: "yellow", textDecoration: "none" }}
              to="/register"
            >
              Register
            </Link>
          </Span>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
