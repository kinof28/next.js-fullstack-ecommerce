import styled from "styled-components";

const Container = styled.div`
  flex-basis: 24%;
  flex-grow: 1;
  position: relative;
  margin-top: 4rem;
  & h3 {
    cursor: pointer;
    font-size: 2.2rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -2px;
    margin-bottom: 1rem;
  }
  & p {
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 5rem;
    margin-right: 4rem;
  }
  & a {
    position: absolute;
    bottom: 0;
    font-size: 0.8rem;
    padding: 10px 2px;
    text-transform: uppercase;
    color: #969696;
    border-bottom: 2px solid #fff;
    transition: all 0.2s ease;
  }
  &:hover a {
    border-bottom: 2px solid grey;
  }
`;
const Category = (props) => {
  return (
    <Container>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href="#">{props.title}</a>
    </Container>
  );
};
export default Category;
