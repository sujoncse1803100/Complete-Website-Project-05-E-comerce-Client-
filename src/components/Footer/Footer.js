import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import RoomIcon from "@material-ui/icons/Room";
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import paypal from "../../Images/paypal.png";
import visa from "../../Images/visa.png";
import visaa from "../../Images/visaa.png";
import payoneer from "../../Images/payoneer.png";
import { mobile, desctop, tablet } from "../../Responsive";

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  background-color: gray;
  color: white;
  padding: 15px;
  ${mobile({ padding: "0px", flexDirection: "column" })};
  ${tablet({ padding: "0px", flexDirection: "column" })};
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
  height: 100%;
  ${mobile({ padding: "0px" })};
`;
const Logo = styled.h3``;
const Desc = styled.p`
  text-align: justify;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: #${(props) => props.color};
  margin: 5px;
  padding: 5px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  min-width: 50%;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  overflow: scroll;
`;

const ContactItem = styled.div`
  margin: 10px 10px 0 0;
  display: flex;
  overflow: scroll;
`;

const Payment = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
`;
const PaymentImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 5px;
  cursor: pointer;
`;

const Span = styled.span`
  // font-size: 15px;
  font-weight: 500;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Sujon Ali</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem saepe
          ducimus iure tempore provident tenetur repudiandae quos, omnis eius
          vel! Modi doloremque ea blanditiis facilis iusto officiis eius
          cupiditate quasi!
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <LinkedInIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon /> <Span>: 36/5 Mirpur, Dhaka, Bangladesh</Span>
        </ContactItem>
        <ContactItem>
          <PhoneForwardedIcon /> <Span>:+8801782562576</Span>
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon /> <Span>:s@querist.dev</Span>
        </ContactItem>
        <Payment>
          <PaymentImage src={paypal} />
          <PaymentImage src={visa} />
          <PaymentImage src={visaa} />
          <PaymentImage src={payoneer} />
        </Payment>
      </Right>
    </Container>
  );
};

export default Footer;
