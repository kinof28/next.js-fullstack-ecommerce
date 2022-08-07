import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 50vh;
  margin-top: -4px;
  background-color: black;
  color: white;
  border-top: 1px solid #2c2c2d;
`;

const Left = styled.div`
  flex: 1;

  border-right: 1px solid #2c2c2d;
`;

const Center = styled.div`
  flex: 1;
  border-right: 1px solid #2c2c2d;
  display: flex;
`;

const Right = styled.div`
  flex: 1;
  border-right: 1px solid #2c2c2d;
`;

const Form = styled.div``;

const Column = styled.div``;

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
      <Center>
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
      </Center>
      <Right>
        <h3>Follow Us</h3>
        <IconsContainer></IconsContainer>
      </Right>
    </Container>
  );
};
export default NewsLetter;
