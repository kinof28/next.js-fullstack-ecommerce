import styled from "styled-components";

const Container = styled.div``;
const ImageContainer = styled.div`
  display: flex;
  overflow: hidden;
  transform: translate3d(0 0 100%);
  & img {
    width: 100%;
  }
`;
const Slider = () => {
  return (
    <Container>
      <ImageContainer>
        <img src="./inside-skullcandy/slider_desktop_1.avif" alt="" />
        <img src="./inside-skullcandy/slider_desktop_2.avif" alt="" />
        <img src="./inside-skullcandy/slider_desktop_3.avif" alt="" />
        <img src="./inside-skullcandy/slider_desktop_4.avif" alt="" />
      </ImageContainer>
    </Container>
  );
};
export default Slider;
