import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { AppState } from "../../app/store";
import {
  getProductsPreview,
  ProductPreview,
} from "../../features/products/productsSlice";
import ProductCard from "./ProductCard";

const Container = styled.div`
  display: flex;
  gap: 2vw;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = (props) => {
  const dispatch = useDispatch();
  const products: ProductPreview[] = useSelector(
    (state: AppState) => state.products.value
  );
  useEffect(() => {
    dispatch(getProductsPreview());
  }, []);

  return (
    <>
      <button onClick={() => dispatch(getProductsPreview())}>Refresh</button>
      <Container>
        {products.map((e) => (
          <ProductCard product={e} />
        ))}
      </Container>
    </>
  );
};
export default Products;
