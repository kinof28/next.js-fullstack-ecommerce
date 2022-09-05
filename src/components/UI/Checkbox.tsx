import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 1rem 0px;
  & label {
    padding: 0.5rem;
  }
  & input[type="checkbox" i] {
    margin: 0;
  }
  & div {
    width: 100%;
  }
  & * {
    cursor: pointer;
  }
`;

const Checkbox = (props) => {
  const [checked, setChecked] = useState(true);
  return (
    <Container>
      <div onClick={() => setChecked((prev) => !prev)}>
        <input
          type="checkbox"
          id="news-letter"
          name="news-letter-checkbox"
          value="Sign up for Newsletter"
          checked={checked}
        />
        <label
          htmlFor="news-letter"
          onClick={() => setChecked((prev) => !prev)}
        >
          Sign up for Newsletter
        </label>
      </div>
    </Container>
  );
};
export default Checkbox;
