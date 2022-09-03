import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 65vh;
  padding: 3rem;
  color: #fff;
  display: flex;
  flex-direction: ${(props) => (props.direct ? "row" : "row-reverse")};
  justify-content: flex-end;
  align-items: center;
  & img {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -1;
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
  & button {
    border: none;
    outline: none;
    text-transform: uppercase;
    padding: 1rem 2rem;
    font-size: 0.8rem;
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
        <button>Learn More</button>
      </div>
    </Container>
  );
};
export default Section;
