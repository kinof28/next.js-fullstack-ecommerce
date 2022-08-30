import styled from "styled-components";

const ButtonElement = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  background-color: #ededed;
  padding: 1rem 2rem;
  font-size: 0.85rem;
  overflow: hidden;
  text-transform: uppercase;
  white-space: nowrap;
  transform: scaleY(0.86);
  letter-spacing: 1px;
  & div {
    width: 20px;
    background-color: #ddd;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%) skew(20deg);
    transition: width 0.36s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:hover div {
    width: 200%;
  }
  & span {
    position: relative;
  }
`;

const Button = (props) => {
  return (
    <ButtonElement>
      <div></div>
      <span>{props.value}</span>
    </ButtonElement>
  );
};
export default Button;
