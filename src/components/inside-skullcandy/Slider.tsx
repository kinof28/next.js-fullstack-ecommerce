import { useState } from "react";
import styled from "styled-components";
import { useInterval } from "../../app/hooks";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;
const ImageContainer = styled.div`
  display: flex;
  transition: all 1s ease;
  transform: translateX(-${(props) => props.translateX});
  & img {
    width: 100%;
  }
`;
const Slider = () => {
  const [translateX, setTranslateX] = useState(0);
  useInterval(() => {
    setTranslateX((prev) => {
      if (prev < 300) return prev + 100;
      else return 0;
    });
  }, 3000);
  return (
    <Container>
      <ImageContainer translateX={translateX + "%"}>
        <img src="./inside-skullcandy/slider_desktop_1.avif" alt="" />
        <img src="./inside-skullcandy/slider_desktop_2.avif" alt="" />
        <img src="./inside-skullcandy/slider_desktop_3.avif" alt="" />
        <img src="./inside-skullcandy/slider_desktop_4.avif" alt="" />
      </ImageContainer>
    </Container>
  );
};
export default Slider;
