import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../app/store";
import {
  getProductsPreview,
  ProductPreview,
} from "../../features/products/productsSlice";

const Products = (props) => {
  // const [products,setProducts]=useState([]);
  const products: ProductPreview[] = useSelector(
    (state: AppState) => state.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("products before dispatch: ", products);
    dispatch(getProductsPreview());
    console.log("products after dispatch: ", products);
  }, []);

  return (
    <div>
      <h4>products:</h4>
      {products.map((e) => (
        <p>
          {e.name} <br />
          {e.title} <br />
          {e.price} <br />
          <img src={e.mainImag} alt={e.title} />
        </p>
      ))}
      ;
    </div>
  );
};
export default Products;
