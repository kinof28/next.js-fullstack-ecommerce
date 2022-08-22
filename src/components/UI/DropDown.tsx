import styled from "styled-components";

const Container = styled.div`
  background: white;
  color: black;
  height: ${(props) => (props.displayed ? "max-content" : "0vh")};
  display: ${(props) => (props.displayed ? "flex" : "none")};
  opacity: ${(props) => (props.displayed ? "1" : "0")};
  width: 100%;
  z-index: 1;
  /* border-bottom: 1px solid #2c2c2d; */
  position: absolute;
  transition: all 1s ease;
  & h3 {
    margin: 0;
  }
`;

const Shop = styled.div`
  display: flex;
  & img {
    width: 100%;
  }
`;
const Inside = styled.div`
  display: flex;
  & h3 {
    text-transform: uppercase;
    padding: 2rem 1.3rem;
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 1.5rem;
    letter-spacing: -2px;
  }
`;
const Support = styled.div``;
const Region = styled.div``;
const Language = styled.div``;
const ImageContainer = styled.div`
  border-left: 1px solid #2c2c2d;
  & img {
    width: 100%;
  }
`;

const DropDown = (props) => {
  return (
    <Container displayed={props.displayed}>
      {props.content === "shop" && (
        <Shop>
          <div>
            <a href="#">New Arrivals</a>
            <a href="#">Find Your Perfect Pair</a>
            <a href="#">Skull-IQ Products</a>
            <a href="#">The Workshop</a>
            <a href="#">Corporate Sales</a>
            <a href="#">Sale</a>
          </div>
          <div>
            <h3>Earbuds</h3>
            <a href="#">True Wireless Earbuds</a>
            <a href="#">Wireless Earbuds</a>
            <a href="#">Wired Earbuds</a>
            <a href="#">Shop All Earbuds</a>
          </div>
          <div>
            <h3>Headphones</h3>
            <a href="#">Wireless Headphones</a>
            <a href="#">Wired Headphones</a>
            <a href="#">Shop All Headphones</a>
          </div>
          <div>
            <h3>Accessories</h3>
            <a href="#">Power Accessories</a>
          </div>
          <div>
            <img
              src="./dropdown/desktop-dropdown-featured-product.jpg"
              alt="Find Your Perfect Pair"
            />
            <h3>Find Your Perfect Pair</h3>
          </div>
        </Shop>
      )}
      {props.content === "inside" && (
        <Inside>
          <ImageContainer>
            <img src="./dropdown/desktop-dropdown-1.jpg" />
            <h3>Music with a Mission</h3>
          </ImageContainer>
          <ImageContainer>
            <img src="./dropdown/desktop-dropdown-2.jpg" />
            <h3>Find Your Frequency</h3>
          </ImageContainer>
          <ImageContainer>
            <img src="./dropdown/desktop-dropdown-3.jpg" />
            <h3>Our Mission, Vision, and Values</h3>
          </ImageContainer>
          <ImageContainer>
            <img src="./dropdown/desktop-dropdown-4.jpg" />
            <h3>Our Culture</h3>
          </ImageContainer>
          <ImageContainer>
            <img src="./dropdown/desktop-dropdown-5.jpg" />
            <h3>Our Sustainable Efforts</h3>
          </ImageContainer>
        </Inside>
      )}
      {props.content === "support" && (
        <Support>
          <h3>Help Center</h3>
          <h3>Product Help</h3>
          <h3>Warranty</h3>
          <h3>Order Status</h3>
        </Support>
      )}
      {props.content === "language" && (
        <Language>
          <Region>
            <h3>North America</h3>
            <a href="#">Canada</a>
            <a href="#">Mexico</a>
            <a href="#">United States</a>
          </Region>
          <Region>
            <h3>South America</h3>
            <a href="#">Argentina</a>
            <a href="#">Chile</a>
            <a href="#">Peru</a>
          </Region>
          <Region>
            <h3>Europ / Middle East</h3>
            <a href="#">United Kingdom</a>
            <a href="#">Europe (EN)</a>
            <a href="#">Other Middle Eastern Countries</a>
          </Region>
          <Region>
            <h3>Africa</h3>
            <a href="#">South Africa</a>
          </Region>
          <Region>
            <h3>Asia</h3>
            <a href="#">Japan | 日本</a>
            <a href="#">Mainland China | 中国内地</a>
            <a href="#">ChinaTaiwan | 中国台湾</a>
            <a href="#">SouthKorea | 대한민국</a>
            <a href="#">India</a>
          </Region>
          <Region>
            <h3>Pacific</h3>
            <a href="#">Australia</a>
            <a href="#">New Zeeland</a>
          </Region>
        </Language>
      )}
    </Container>
  );
};
export default DropDown;
