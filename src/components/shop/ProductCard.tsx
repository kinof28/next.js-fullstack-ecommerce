import styled from "styled-components";
import { ProductPreview } from "../../features/products/productsSlice";

const Container = styled.article`
  text-align: center;
  font-size: 0.825rem;
  padding: 1rem 3rem;
  flex: 0 1 30%;
  & p {
    /* padding: 0; */
    margin: 0;
    line-height: 1.5rem;
  }
  & img {
    width: 100%;
  }
`;
const MainImage = styled.img``;
const ModelImages = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
  & img {
    width: 3vw;
  }
`;

const ProductCard = (props) => {
  const product: ProductPreview = props.product;
  return (
    <Container>
      {/* <MainImage /> */}
      <img src={product.mainImag} alt={product.title} />
      <ModelImages>
        {product.models.map((model) => (
          <img src={model.image} alt={model.id.toString()} />
        ))}
      </ModelImages>
      <p>{product.title}</p>
      <p>${product.price - 0.01}</p>
    </Container>
  );
};
export default ProductCard;
