import styled from "styled-components";

const Container = styled.div``;
const ImageContainer = styled.div`
  display: flex;
  /* transform: translateX(-100%); */
  /* overflow:; */
  & img {
    width: 100%;
    /* opacity: 0; */
    display: none;
  }
  & img:nth-child(2) {
    display: block;
    /* opacity: 1; */
    /* border: 2px solid red; */
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
