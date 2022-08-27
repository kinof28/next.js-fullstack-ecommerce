import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  padding: 10px;
  border-top: 1px solid #2c2c2d;
`;
const Announcement = () => {
  return (
    <Container>
      Orders placed today will be shipped on or after 8/8/2022 due to a
      temporary warehouse closure
    </Container>
  );
};
export default Announcement;
