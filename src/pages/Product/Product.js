import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcdment from "../../components/Announcement/Announcdment";
import Footer from "../../components/Footer/Footer";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Navbar from "./../../components/Navbar/Navbar";
import shirt from "../../Images/shirt.jpg";
import { Add, Remove, ShoppingCart } from "@material-ui/icons";
import { publicRepuest } from "../../ResponseMethod";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-itmes: center;
  min-height: 30vh;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 20px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;
const Desc = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 20px 0px;
`;
const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Filter = styled.div`
  display: flex;
  margin: 10px 0px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-right: 10px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid gray;
  border-radius: 50%;
  margin: 5px 0px 5px 5px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  width: 100px;
  padding: 5px 10px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const AmountContainer = styled.div`
  display: flex;
`;
const Icon = styled.div`
  padding-top: 5px;
  cursor: pointer;
`;

const Amount = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin: 0px 20px;
  border: 1px solid gray;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  border: 1px solid lightgray;
  padding: 5px 20px;
  margin: 20px 0px;
  min-width: 200px;
  background-color: white;
`;

const Product = () => {
  const locatiom = useLocation();
  const id = locatiom.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    try {
      const getProduct = async () => {
        const res = await publicRepuest.get("/product/find/" + id);
        setProduct(res.data);
      };
      getProduct();
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  const handleQuantity = (action) => {
    if (action === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else if (action === "inc") {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    ///update product
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Announcdment />
      <Wrapper>
        <ImageContainer>
          <Image src={shirt} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c, i) => (
                <FilterColor key={i} color={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s, i) => (
                  <FilterSizeOption key={i}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Icon>
                <Remove onClick={() => handleQuantity("dec")} />
              </Icon>
              <Amount>{quantity}</Amount>
              <Icon>
                <Add onClick={() => handleQuantity("inc")} />
              </Icon>
            </AmountContainer>
            <Button onClick={handleAddToCart}>
              <ShoppingCart /> Add to Cart
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
