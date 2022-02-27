import React, { useState } from "react";
import "./Slider.css";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { sliderItems } from "../../Data";
import { mobile, desctop, tablet } from "../../Responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  // background-color: coral;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.directiom === "left" && "10px"};
  right: ${(props) => props.directiom === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.bg};
  ${mobile({ padding: "30px", flexDirection: "column" })};
  ${tablet({ padding: "50px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
  flex: 1;
  padding: 60px;
  ${mobile({ padding: "0px" })};
`;

const Image = styled.img`
  height: 80%;
  width: 80%;
  ${mobile({ width: "100%" })};
  ${tablet({ width: "100%" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding-top: 60px;
  padding-right: 20px;
  ${mobile({ paddingRight: "0px" })};
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  ${mobile({ fontSize: "15px" })};
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 3px;
  ${mobile({ fontSize: "15px" })};
`;
const Button = styled.button`
  padding: 10px 30px;
  bacground-color: transparent;
  border: none;
  ${mobile({ fontSize: "15px", paddin: "0px 10px" })};
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState();

  const handleClick = (directiom) => {
    if (directiom === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    } else if (directiom === "right") {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow directiom="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item, index) => {
          return (
            <Slide key={index} bg={item.bg}>
              <ImgContainer>
                <Image src={item.image} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>

      <Arrow directiom="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
