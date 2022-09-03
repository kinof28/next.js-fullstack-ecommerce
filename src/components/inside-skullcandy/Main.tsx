import styled from "styled-components";

const Container = styled.div`
  background-color: #333;
  padding: 2rem;
  & p {
    margin: 0;
  }
`;
const Main = () => {
  return (
    <Container>
      <p>Main content</p>
    </Container>
  );
};
export default Main;
