import styled from "styled-components";

const Container = styled.div`
  & label {
    display: block;
    margin: 0.5rem 0px;
  }
  & input {
    width: 100%;
    height: 50px;
    background-color: #f6f6f6;
    color: #383838;
    margin-bottom: 0;
    border: 1px solid #ddd;
    outline: none;
    display: block;
    font-size: 1rem;
    transition: border-color 0.15s linear;
  }
  & input:focus-visible {
    border-color: #949494;
  }
`;
const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  & span {
    text-transform: uppercase;
    font-size: 0.65rem;
    color: #757575;
  }
`;
const Input = (props) => {
  return (
    <Container>
      <LabelContainer>
        <label htmlFor="input">{props.label}</label>
        {props.required && <span>required</span>}
      </LabelContainer>
      <input id="input" type={props.type} />
    </Container>
  );
};
export default Input;
