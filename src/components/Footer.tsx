import styled from "styled-components";

const Container = styled.div`
  padding: 12px 0px;
  display: flex;
  margin-top: -4px;
  letter-spacing: 1px;
  background-color: rgb(0, 0, 0);
  color: white;
  border-top: 1px solid #2c2c2d;
  font-size: 12px;
  font-weight: 200;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    padding: 0px 5px;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  & img {
    width: 75%;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <a href="#">Privacy Policy</a> |<a href="#">Terms of Use</a> |
        <a href="#">California Notice of Collection</a>
      </Left>
      <Center>© 2022 Abdelwahab Hamadouche All Rights Reserved</Center>
      <Right>
        <img src="./creditcardlogos1.webp" alt="payment methods" />
      </Right>
    </Container>
  );
};
export default Footer;
