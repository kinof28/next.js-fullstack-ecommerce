import styled from "styled-components";

const Container = styled.div`
  background: white;
  color: black;
  height: ${(props) => (props.displayed ? "15vh" : "0vh")};
  width: 100%;
  position: absolute;
  transition: all 0.5s ease;
  & h3 {
    margin: 0;
  }
`;

const Shop = styled.div``;
const Inside = styled.div``;
const Support = styled.div``;
const Language = styled.div``;
const ImageContainer = styled.div``;

const DropDown = (props) => {
  return (
    <Container displayed={props.displayed}>
      <Shop></Shop>
      <Inside>
        <ImageContainer>
          <img />
          <h3>Music with a Mission</h3>
        </ImageContainer>
        <ImageContainer>
          <img />
          <h3>Find Your Frequency</h3>
        </ImageContainer>
        <ImageContainer>
          <img />
          <h3>Our Mission, Vision, and Values</h3>
        </ImageContainer>
        <ImageContainer>
          <img />
          <h3>Our Culture</h3>
        </ImageContainer>
        <ImageContainer>
          <img />
          <h3>Our Sustainable Efforts</h3>
        </ImageContainer>
      </Inside>
      <Support></Support>
      <Language></Language>
    </Container>
  );
};
export default DropDown;
