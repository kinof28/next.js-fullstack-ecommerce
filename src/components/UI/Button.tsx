import styled from "styled-components";

const ButtonElement = styled.div`
  border: none;
  cursor: pointer;
  display: inline;
  position: relative;
  background-color: #ededed;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  overflow: hidden;
  & div {
    /* content: ""; */
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
    width: 100%;
  }
  & span {
    z-index: 10;
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
