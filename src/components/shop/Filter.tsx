import Button from "../UI/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 4rem;
`;
const Sort = styled.div`
  cursor: pointer;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #949494;
  margin-bottom: 4px;
  font-size: 0.8rem;
  & select {
    cursor: pointer;
    border: none;
    background-color: #fff;
    outline: none;
    text-transform: uppercase;
    padding: 0px 35px 0px 50px;
    margin-right: 10px;
    font-size: 0.7rem;
  }
  & span {
    text-transform: uppercase;
    position: absolute;
    left: 0;
    padding-left: 10px;
    transform: scaleY(0.9);
  }
`;

const Filter = (props) => {
  return (
    <Container>
      <Button value="True Wirless" />
      <Button value="Earbuds" />
      <Button value="Headphones" />
      <Button value="Sale" />
      <Sort>
        <span>Sort:</span>
        <select name="sort" id="sort">
          <option value="featured">Featured Items</option>
          <option value="newest">Newest Items</option>
          <option value="bestselling">Best Selling</option>
          <option value="alphaasc">A to Z</option>
          <option value="alphadesc">Z to A</option>
          <option value="avgcustomerreview">By Review</option>
          <option value="priceasc">PRICE LOW TO HIGH</option>
          <option value="pricedesc">PRICE HIGH TO LOW</option>
        </select>
      </Sort>
    </Container>
  );
};
export default Filter;
