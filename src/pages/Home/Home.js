import React from "react";
import Announcdment from "../../components/Announcement/Announcdment";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import "./Home.css";
import Categories from "./../../components/Categories/Categories";
import Products from "../../components/Products/Products";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100hw;
`;
const Home = () => {
  return (
    <Container>
      <Announcdment />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Home;
