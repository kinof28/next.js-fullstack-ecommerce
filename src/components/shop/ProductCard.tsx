import styled from "styled-components";
import { ProductPreview } from "../../features/products/productsSlice";

const Container = styled.article`
  text-align: center;
  font-size: 0.825rem;
  padding: 1rem 3rem;
  flex: 0 1 30%;
  cursor: pointer;
  & p {
    margin: 0;
    line-height: 1.5rem;
  }
  & img {
    width: 100%;
    transition: transform 0.25s ease-in-out;
  }
  &:hover img#main-img {
    transform: scale(1.03);
  }
`;
const ModelImages = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
`;
const ModelImage = styled.div`
  position: relative;
  & img {
    width: 3vw;
  }
  div {
    display: none;
    position: absolute;
    text-transform: uppercase;
    font-size: 12px;
    max-width: 10rem;
    bottom: calc(100% + 5px);
    left: 50%;
    transform: translate(-50%, -0.5em);
    padding: 0.4em 0.6em;
    background-color: #2d2c2d;
    color: white;
    white-space: nowrap;
    box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);
  }
  &:hover div {
    display: block;
  }
  & div::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    border: 5px solid transparent;
    border-bottom-width: 0;
    border-top-color: #2c2c2d;
  }
`;

const ProductCard = (props) => {
  const product: ProductPreview = props.product;
  return (
    <Container>
      <img src={product.mainImag} alt={product.title} id="main-img" />
      <ModelImages>
        {product.models.map((model) => (
          <ModelImage>
            <img src={model.image} alt={model.name} title={model.name} />
            <div>{model.name}</div>
          </ModelImage>
        ))}
      </ModelImages>
      <p>{product.title}</p>
      <p>${product.price - 0.01}</p>
    </Container>
  );
};
export default ProductCard;
