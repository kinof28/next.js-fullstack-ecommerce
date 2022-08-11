import styled from "styled-components";

const Container = styled.div`
  background: white;
  color: black;
  height: ${(props) => (props.displayed ? "30vh" : "0vh")};
  display: ${(props) => (props.displayed ? "flex" : "none")};
  width: 100%;
  z-index: 1;
  border-bottom: 1px solid #2c2c2d;
  position: absolute;
  transition: all 0.5s ease;
  & h3 {
    margin: 0;
  }
`;

const Shop = styled.div``;
const Inside = styled.div`
  display: flex;
`;
const Support = styled.div``;
const Language = styled.div``;
const ImageContainer = styled.div`
  border-left: 1px solid #2c2c2d;
  & img {
    width: 100%;
  }
`;

const DropDown = (props) => {
  return (
    <Container displayed={props.displayed}>
      <Shop></Shop>
      <Inside>
        <ImageContainer>
          <img src="./dropdown/desktop-dropdown-1.jpg" />
          <h3>Music with a Mission</h3>
        </ImageContainer>
        <ImageContainer>
          <img src="./dropdown/desktop-dropdown-2.jpg" />
          <h3>Find Your Frequency</h3>
        </ImageContainer>
        <ImageContainer>
          <img src="./dropdown/desktop-dropdown-3.jpg" />
          <h3>Our Mission, Vision, and Values</h3>
        </ImageContainer>
        <ImageContainer>
          <img src="./dropdown/desktop-dropdown-4.jpg" />
          <h3>Our Culture</h3>
        </ImageContainer>
        <ImageContainer>
          <img src="./dropdown/desktop-dropdown-5.jpg" />
          <h3>Our Sustainable Efforts</h3>
        </ImageContainer>
      </Inside>
      <Support></Support>
      <Language></Language>
    </Container>
  );
};
export default DropDown;
