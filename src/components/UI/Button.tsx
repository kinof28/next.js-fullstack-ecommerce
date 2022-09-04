import styled from "styled-components";

const ButtonElement = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  background-color: ${(props) => (props.dark ? "#444" : "#ededed")};
  color: ${(props) => (props.dark ? "#fff" : "#000")};
  padding: 1rem 2rem;
  font-size: 0.85rem;
  overflow: hidden;
  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: 1px;
  text-align: center;
  flex: 1;
  & div {
    width: 20px;
    background-color: ${(props) => (props.dark ? "#2c2c2d" : "#ddd")};
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%) skew(20deg);
    transition: width 0.36s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:hover div {
    width: 140%;
  }
  & span {
    position: relative;
  }
`;

const Button = (props) => {
  return (
    <ButtonElement dark={props.dark} onClick={props.onClick}>
      <div></div>
      <span>{props.value}</span>
    </ButtonElement>
  );
};
export default Button;
