import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../app/store";
import {
  getProductsPreview,
  ProductPreview,
} from "../../features/products/productsSlice";
import ProductCard from "./ProductCard";

const Products = (props) => {
  const dispatch = useDispatch();
  const products: ProductPreview[] = useSelector(
    (state: AppState) => state.products.value
  );
  useEffect(() => {
    dispatch(getProductsPreview());
  }, []);

  return (
    <div>
      <h4>products: </h4>
      {products.map((e) => (
        <ProductCard product={e} />
      ))}
      <button onClick={() => dispatch(getProductsPreview())}>Refresh</button>
    </div>
  );
};
export default Products;
