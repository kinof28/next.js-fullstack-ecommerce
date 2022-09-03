import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0px 2rem;
  color: #fff;
  transition: color 0.2s ease;
  &:hover {
    color: grey;
  }
  & img {
    height: 80px;
    padding: 5px;
    object-fit: contain;
  }
  & h4 {
    margin: 0.5rem;
    font-size: 1.1rem;
  }
  & p {
    margin-top: 0;
    font-size: 1.1rem;
    line-height: 1.7rem;
    /* padding: 0 0.5rem; */
  }
`;
const MainSection = (props) => {
  return (
    <Container>
      <img src={props.image} alt={props.title} />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <a href="#">Learn More {">"}</a>
    </Container>
  );
};
export default MainSection;
