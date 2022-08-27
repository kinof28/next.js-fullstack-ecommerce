import styled from "styled-components";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

const Container = styled.div`
  display: flex;
  height: 49vh;
  margin-top: -4px;
  background-color: black;
  color: white;
  border-top: 1px solid #2c2c2d;
  border-bottom: 1px solid #2c2c2d;
  position: relative;
`;
const Left = styled.div`
  width: 25%;
  padding-top: 4%;
  text-align: center;
  & h3 {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: -1px;
  }
`;
const Center = styled.div`
  width: 55%;
  background-color: #2c2c2d;
  clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
`;
const CenterContent = styled.div`
  position: absolute;
  top: 0%;
  width: 54.8%;
  height: 100%;
  left: 25.1%;
  display: flex;
  justify-content: flex-start;
  clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
  background-color: black;
  padding-left: 10%;
  padding-top: 4%;
  font-size: 15px;
  line-height: 30px;
  font-weight: 500;
`;
const Right = styled.div`
  padding-top: 3%;
  width: 15%;
  margin-left: -5%;
  text-align: center;
  & h3 {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: -1px;
  }
`;
const Form = styled.div`
  & input {
    padding: 10px 20px;
    outline: none;
    width: 50%;
    height: 2.5rem;
  }
  & button {
    color: white;
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-weight: 600;
    padding-left: 10px;
    cursor: pointer;
  }
  & button:hover {
    color: grey;
  }
`;
const Column = styled.div`
  margin-right: 50px;
  & a {
    display: block;
    transition: all 0.2s ease;
  }
  & a:hover {
    color: grey;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  font-size: 30px;
  width: 100%;
  justify-content: space-between;
  & svg {
    transition: all 0.2s ease;
    cursor: pointer;
  }
  & svg:hover {
    color: grey;
  }
`;
const NewsLetter = () => {
  return (
    <Container>
      <Left>
        <h3>Hear it First</h3>
        <Form>
          <input placeholder="Sign up for Emails" type="email" />
          <button>{">"}</button>
        </Form>
      </Left>
      <Center></Center>
      <CenterContent>
        <Column>
          <a href="#">Help Center</a>
          <a href="#">Warranty</a>
          <a href="#">Contact Us</a>
          <a href="#">Product Help</a>
          <a href="#">Order status</a>
          <a href="#">Recycling</a>
          <a href="#">Pay Later with Klarna</a>
        </Column>
        <Column>
          <a href="#">Product Selector</a>
          <a href="#">Custom Product</a>
          <a href="#">Bulk Orders</a>
          <a href="#">Press Releases</a>
          <a href="#">Sound Advice</a>
        </Column>
        <Column>
          <a href="#">About</a>
          <a href="#">Born in PC</a>
          <a href="#">Careers</a>
        </Column>
      </CenterContent>
      <Right>
        <h3>Follow Us</h3>
        <IconsContainer>
          <AiOutlineInstagram />
          <AiOutlineYoutube />
          <AiOutlineFacebook />
          <AiOutlineTwitter />
        </IconsContainer>
      </Right>
    </Container>
  );
};
export default NewsLetter;
