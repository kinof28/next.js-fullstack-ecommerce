import styled from "styled-components";

const Container = styled.div`
  display: flex;
  color: white;
  & div {
    cursor: pointer;
  }
`;

const Left = styled.div`
  flex: 2;
  position: relative;
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

const LeftText = styled.div`
  position: absolute;
  top: 7%;
  left: 12%;
  width: 40%;
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: ${(props) => (props.right ? "1.2rem" : "2.5rem")};
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1rem;
  margin-bottom: ${(props) => (props.right ? "0px" : "2rem")};
  transform: scaleY(0.9);
`;

const Description = styled.p`
  font-size: ${(props) => (props.right ? "16px" : "18px")};
  margin-top: 10px;
  font-weight: ${(props) => (props.right ? 500 : 500)};
  line-height: 18px;
  transform: scaleY(1.1);
`;

const Button = styled.div`
  margin-top: 30px;
  background-color: #fff;
  color: black;
  padding: 18px 45px;
  width: fit-content;
  font-size: 14px;
  font-weight: 500;
`;

const RightTop = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const RightBottom = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const RightText = styled.div`
  position: absolute;
  top: 8%;
  width: 50%;
`;

const Models = () => {
  return (
    <Container>
      <Left>
        <img src="./1.avif" />
        <LeftText>
          <Title>Take a Hike.</Title>
          <Description>
            This limited edition reminds you to get out and enjoy our natural
            playgrounds. With each pair sold, we give a cut to our friends at
            Protect Our Winters.
          </Description>
          <Button>SHOP LIMITED-EDITION DIME 2</Button>
        </LeftText>
      </Left>
      <Right>
        <RightTop>
          <img src="./2.avif" />
          <RightText>
            <Title right={true}>Smart Features, Wirless Charging.</Title>
            <Description right={true}>Shop Grind Fuel {">"}</Description>
          </RightText>
        </RightTop>
        <RightBottom>
          <img src="./3.avif" />
          <RightText>
            <Title right={true}>All Love, All Year.</Title>
            <Description right={true}>
              Shop Inequality Crusher {">"}
            </Description>
          </RightText>
        </RightBottom>
      </Right>
    </Container>
  );
};
export default Models;
