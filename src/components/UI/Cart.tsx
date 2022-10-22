import { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCart } from "../../features/cart/cartSlice";

const Container = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 4rem;
  font-size: 0.8rem;
  & h3 {
    text-transform: uppercase;
    font-size: 1rem;

    margin: 0.5rem 0px;
  }
  & p {
    margin: 1rem 0px 4rem 0px;
  }
  & svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
  & div {
    margin: 0px 7rem;
  }
`;
const Cart = (props) => {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("cart is loaded");
  }, []);
  const content =
    cart.items.length > 0 ? (
      <div>
        <h3>Shopping cart</h3>
        <h4> It's not empty</h4>
        <p>Your bag is not empty</p>
      </div>
    ) : (
      <div>
        <h3>Shopping cart</h3>
        <p>Your bag is empty</p>
      </div>
    );
  return (
    <Container>
      {content}
      <CgClose
        onClick={() => {
          props.onClose();
        }}
      />
    </Container>
  );
};
export default Cart;
