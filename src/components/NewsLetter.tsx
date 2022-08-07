import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 10vh;
  margin-top: -4px;
  background-color: black;
  color: white;
`;

const Left = styled.div``;

const Right = styled.div``;

const Center = styled.div``;

const NewsLetter = () => {
  return (
    <Container>
      <Left></Left>
      <Right></Right>
      <Center></Center>
    </Container>
  );
};
export default NewsLetter;
