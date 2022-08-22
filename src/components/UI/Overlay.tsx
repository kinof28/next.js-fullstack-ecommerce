import styled from "styled-components";

const Background = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.displayed ? 1 : 0)};
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: opacity 0.25s ease-out;
  z-index: 1;
`;

const Overlay = (props) => {
  return <Background displayed={props.displayed}></Background>;
};

export default Overlay;
