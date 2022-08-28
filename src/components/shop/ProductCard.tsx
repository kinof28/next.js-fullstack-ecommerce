import styled from "styled-components";
import { ProductPreview } from "../../features/products/productsSlice";

const Container = styled.article`
  & img {
    width: 100%;
  }
`;
const MainImage = styled.img``;
const ModelImages = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  & img {
    width: 5vw;
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
      <p>{product.price}</p>
    </Container>
  );
};
export default ProductCard;