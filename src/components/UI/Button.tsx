import styled from "styled-components";

const ButtonElement = styled.button``;

const Button = (props) => {
  return <ButtonElement>{props.value}</ButtonElement>;
};
export default Button;
