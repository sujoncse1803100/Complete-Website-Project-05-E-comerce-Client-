import React from "react";
import styled from "styled-components";
import Announcdment from "../../components/Announcement/Announcdment";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import LOUNGWEAR from "../../Images/LOUNGWEAR.jpg";
import shirt from "../../Images/shirt.jpg";
import { Add, Remove } from "@material-ui/icons";
import { mobile, desctop, tablet } from "../../Responsive";
import { useSelector } from "react-redux";
import { popularProducts } from "../../Data";
import Pay from "../../components/Pay/Pay";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  padding-bottom: 0px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "20px", flexDirection: "column" })};
  ${tablet({ padding: "20px", flexDirection: "column" })};
`;
const TopButton = styled.button`
  font-weight: 300;
  cursor: pointer;
  padding: 7px 15px;
  min-width: 150px;
  border: none;
  background-color: ${(props) => props.type && "green"};
  color: ${(props) => props.type && "white"};
  ${(props) =>
    props.type && mobile({ display: "none" }) && tablet({ display: "none" })}
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
  border-top: 1px solid lightgray;
  ${mobile({ margin: "20px 0px", flexDirection: "column" })};
  ${tablet({ margin: "20px 0px", flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 5;
  border-right: 1px solid lightgray;
`;
const Product = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ProductDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Image = styled.img`
  margin-right: 10px;
  min-width: 300px;
  ${mobile({ width: "100%" })};
  ${tablet({ width: "100%" })};
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const ProductName = styled.h3`
  font-size: 40px;
`;
const ProductId = styled.span`
  font-size: 20px;
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 5px;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetails = styled.div`
  justify-content: center;
  align-items: center;
  top: 0;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 0px 15px;
`;
const ProductPrice = styled.div`
  font-size: 40px;
  font-weight: 200;
`;

const Hr = styled.hr``;
const Summery = styled.div`
  padding-left: 25px;
  padding-top: 25px;
  flex: 3;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 760px) {
    display: ${(props) => props.device === "desctop" && "none"};
  }
  @media only screen and (min-width: 760px) {
    display: ${(props) => props.device === "mobile" && "none"};
  }
`;

const SummeryTitle = styled.h1`
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  // font-family: "Roboto", sans-serif;
  font-family: "League Gothic", sans-serif;
`;
const SummeryItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const SummeryItemText = styled.div``;
const CheckoutButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  background-color: green;
  color: white;
`;

const CartSummery = ({ d, cart, shipping, discount }) => {
  const total = cart.total > 10 ? cart.total + shipping - discount : 0;
  return (
    <Summery device={d}>
      <SummeryTitle>ORDER SUMMERY</SummeryTitle>
      <SummeryItem>
        <SummeryItemText>
          <b>Subtotal : </b>
        </SummeryItemText>
        <SummeryItemText> $ {cart.total > 10 ? cart.total : 0}</SummeryItemText>
      </SummeryItem>
      <SummeryItem>
        <SummeryItemText>
          <b>Shipping : </b>
        </SummeryItemText>
        <SummeryItemText> ${cart.total > 10 ? shipping : 0}</SummeryItemText>
      </SummeryItem>
      <SummeryItem>
        <SummeryItemText>
          <b>Discount : </b>
        </SummeryItemText>
        <SummeryItemText> $-{cart.total > 10 ? discount : 0}</SummeryItemText>
      </SummeryItem>
      <Hr />
      <SummeryItem>
        <SummeryItemText>
          <b>Total : </b>
        </SummeryItemText>
        <SummeryItemText> ${total}</SummeryItemText>
      </SummeryItem>
      <CheckoutButton>
        <Pay total={total} />
      </CheckoutButton>
    </Summery>
  );
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const shipping = 5.99;
  const discount = 3.0;

  console.log(cart);
  return (
    <Container>
      <Navbar />
      <Announcdment />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({cart.quantity})</TopText>
            <TopText>Your WishList (0)</TopText>
          </TopTexts>
          <TopButton type="ckeck">CHECKOUT NOW</TopButton>
          <CartSummery
            d="mobile"
            cart={cart}
            shipping={shipping}
            discount={discount}
          />
        </Top>
        <Bottom>
          <Info>
            {cart?.products.map((p, i) => {
              return (
                <Product key={i}>
                  <ProductDetails>
                    <Image src={popularProducts[i].image} />
                    <Details>
                      <ProductName>
                        <b>Product : </b> {p.title}
                      </ProductName>
                      <ProductId>
                        <b>ID : </b> {p._id}
                      </ProductId>
                      <div style={{ display: "flex" }}>
                        <b>Color : </b>
                        <ProductColor color={p.color} />
                      </div>
                      <ProductSize>
                        <b>Size : </b> {p.size}
                      </ProductSize>
                    </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <ProductAmountContainer>
                      <Remove style={{ marginTop: "5px" }} />
                      <ProductAmount>{p.quantity}</ProductAmount>
                      <Add style={{ marginTop: "5px" }} />
                    </ProductAmountContainer>
                    <ProductPrice>${p.price}</ProductPrice>
                  </PriceDetails>
                </Product>
              );
            })}
          </Info>
          <CartSummery
            d="desctop"
            cart={cart}
            shipping={shipping}
            discount={discount}
          />
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
