import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 65vh;
  & img {
    width: 100%;
    position: absolute;
    top: 0px;
    /* left: 0; */
    z-index: -1;
  }
  & div {
    z-index: 2;
  }
  & h2 {
    padding: 0;
    margin: 0;
  }
`;

const Section = (props) => {
  return (
    <Container>
      <img src={props.image} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>Learn More</button>
      </div>
    </Container>
  );
};
export default Section;
