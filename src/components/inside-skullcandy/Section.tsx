import styled from "styled-components";
import Button from "../UI/Button";

const Container = styled.div`
  cursor: pointer;
  background-color: #000;
  position: relative;
  height: 65vh;
  padding: 3rem;
  color: #fff;
  display: flex;
  flex-direction: ${(props) => (props.direct ? "row" : "row-reverse")};
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  & img {
    width: 100%;
    height: 65vh;
    object-fit: cover;
    position: absolute;
    top: 0px;
    left: 0;
    transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 50ms;
  }
  &:hover img {
    transform: scale(1.04);
    opacity: 0.9;
  }
  & div {
    z-index: 0;
  }
  & div:nth-child(2) {
    flex-basis: 70%;
  }
  & div:nth-child(3) {
    flex-basis: 40%;
  }
  & h2 {
    font-size: 3.7rem;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 3rem;
    letter-spacing: -3px;
    margin: 0;
  }
  & p {
    font-weight: 500;
    font-size: 1.1rem;
    margin: 2rem 0rem;
  }
`;

const Section = (props) => {
  return (
    <Container direct={props.direct}>
      <img src={props.image} alt={props.title} />
      <div></div>
      <div>
        {props.title}
        <p>{props.description}</p>
        <Button value="Learn More"></Button>
      </div>
    </Container>
  );
};
export default Section;
