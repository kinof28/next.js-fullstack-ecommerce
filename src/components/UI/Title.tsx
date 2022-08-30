import styled from "styled-components";

const TitleElement = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -3px;
`;

const Title = (props) => {
  return <TitleElement>{props.children}</TitleElement>;
};
export default Title;
