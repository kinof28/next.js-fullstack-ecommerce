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
  /* align-items: center; */
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
`;

const Form = styled.div``;

const Column = styled.div`
  margin-right: 50px;
  & a {
    display: block;
  }
  & a:hover {
    color: grey;
  }
`;

const IconsContainer = styled.div``;

const NewsLetter = () => {
  return (
    <Container>
      <Left>
        <h3>Hear it First</h3>
        <Form>
          <input />
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
