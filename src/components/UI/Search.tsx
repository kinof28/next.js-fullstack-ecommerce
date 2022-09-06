import styled from "styled-components";
import { CgClose } from "react-icons/cg";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: 1.5rem;
`;
const Search = () => {
  return (
    <Container>
      <input type="text" />
      <CgClose />
    </Container>
  );
};
export default Search;
