import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { useRouter } from "next/router";
const Container = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  & input {
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    margin: 0px 1rem;
    border: 1px solid grey;
  }
  & svg {
    cursor: pointer;
  }
`;
const Search = (props) => {
  const [searchValue, setSearcValue] = useState("");
  const route = useRouter();

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          route.push("/search/" + searchValue);
          setSearcValue("");
          props.onClose();
        }}
      >
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearcValue(e.target.value)}
        />
      </form>
      <CgClose onClick={() => props.onClose()} />
    </Container>
  );
};
export default Search;
