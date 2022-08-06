import styled from "styled-components";

const Container = styled.div`
  display: flex;
  /* width: 100vw; */
`;

const Left = styled.div`
  flex: 2;
  & img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  & img {
    width: 100%;
    height: 45vh;
    object-fit: cover;
  }
`;

const Models = () => {
  return (
    <Container>
      <Left>
        <img src="./1.avif" />
      </Left>
      <Right>
        <img src="./2.avif" />
        <img src="./3.avif" />
      </Right>
    </Container>
  );
};
export default Models;
