import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  margin-top: -4px;
  color: white;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  position: relative;
  cursor: pointer;

  backface-visibility: hidden;
  & div {
    position: absolute;
    left: 35%;
    bottom: 15%;
    opacity: 0;
    background-color: white;
    color: black;
    padding: 15px 35px;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
    font-weight: 500;
    transition: opacity 0.5s ease;
    transition: scale 0.2s ease;
  }
  & img {
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease;
  }
  &:hover div {
    opacity: 1;
  }
  &:hover img {
    opacity: 0;
  }
  & div:hover {
    transform: scale(1.01);
  }
`;

const Title = styled.h2`
  position: absolute;
  top: 2%;
  left: 2%;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 800;
  line-height: 18px;
  width: 1px;
  transform: scaleY(0.9);
`;

const Trending = () => {
  return (
    <Container>
      <ImageContainer src="./trending/1-hover.avif">
        <img src="./trending/1.avif" />
        <div>Shop Now</div>
      </ImageContainer>
      <ImageContainer src="./trending/2-hover.avif">
        <img src="./trending/2.avif" />
        <div>Shop Now</div>
      </ImageContainer>
      <ImageContainer src="./trending/3-hover.avif">
        <img src="./trending/3.avif" />
        <div>Shop Now</div>
      </ImageContainer>
      <Title>Trending Now</Title>
    </Container>
  );
};
export default Trending;
