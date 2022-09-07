import styled, { keyframes } from "styled-components";
import Card from "./Card";
import Search from "./Search";
const fade = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
  }
`;
const Container = styled.div`
  background-color: white;
  color: black;
  height: fit-content;
  transform: ${(props) =>
    props.displayed ? "translate3d(0,0,0)" : "translate3d(0,-100%,0)"};
  width: 100%;
  z-index: -1;
  position: absolute;
  transition: all 1s ease;
  & h3 {
    margin: 0;
  }
  & div:first-child {
    animation-name: ${fade};
    animation-duration: 0.5s;
  }
`;
const Shop = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2rem;
  font-size: 0.7rem;
  font-weight: 500;
  & img {
    width: 100%;
  }
  & div:first-child a {
    border-right: 1px solid #c6c6c6;
    padding-right: 3rem;
    margin-right: 2rem;
  }
  & a {
    display: block;
    padding: 5px 2rem;
    transition: color 0.2s ease-out;
  }
  & a:hover {
    color: #949494;
  }
  & img {
    width: 13rem;
  }
  & h3 {
    padding: 1px 2rem;
    font-size: 0.9rem;
    cursor: pointer;
  }
  & h3:nth-child(2) {
    padding: 5px 0px;
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
    transition: color 0.2s ease-out;
  }
  & div:nth-last-child(1):hover {
    cursor: pointer;
    color: #949494;
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
const Support = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 13rem;
  width: 100%;
  font-size: 1.1rem;
  text-transform: uppercase;
  & a {
    display: block;
    margin: 1rem 0px;
    font-weight: 800;
    transition: color 0.2s ease-out;
  }
  & a:hover {
    color: #949494;
  }
`;
const Language = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  padding: 1rem 3rem;
  & a {
    display: block;
    transition: color 0.2s ease-out;
    font-size: 0.75rem;
    line-height: 1.5rem;
    transform: scaleY(0.97);
  }
  & a:hover {
    color: #949494;
  }
  & h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 1rem;
  }
`;
const ImageContainer = styled.div`
  border-left: 1px solid #2c2c2d;
  cursor: pointer;
  overflow: hidden;
  & img {
    width: 100%;
    transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 50ms;
    vertical-align: middle;
  }
  &:hover img {
    transform: scale(1.04);
    opacity: 0.9;
  }
`;
const Red = styled.span`
  color: #ff5100;
  &:hover {
    color: #949494;
  }
`;
const Grey = styled.span`
  color: #949494;
`;
const DropDown = (props) => {
  return (
    <Container displayed={props.displayed} content={props.content}>
      {props.content === "shop" && (
        <Shop>
          <div>
            <a href="#">New Arrivals</a>
            <a href="#">Find Your Perfect Pair</a>
            <a href="#">Skull-IQ Products</a>
            <a href="#">The Workshop</a>
            <a href="#">Corporate Sales</a>
            <a href="#">
              <Red>Sale</Red>
            </a>
          </div>
          <div>
            <h3>Earbuds</h3>
            <a href="#">True Wireless Earbuds</a>
            <a href="#">Wireless Earbuds</a>
            <a href="#">Wired Earbuds</a>
            <a href="#">
              <Grey>Shop All Earbuds</Grey>
            </a>
          </div>
          <div>
            <h3>Headphones</h3>
            <a href="#">Wireless Headphones</a>
            <a href="#">Wired Headphones</a>
            <a href="#">
              <Grey>Shop All Headphones</Grey>
            </a>
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
            <h3>
              Find Your Perfect Pair <span>▶</span>
            </h3>
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
          <div>
            <a href="#">Help Center</a>
            <a href="#">Product Help</a>
            <a href="#">Warranty</a>
            <a href="#">Order Status</a>
          </div>
        </Support>
      )}
      {props.content === "language" && (
        <Language>
          <div>
            <h3>North America</h3>
            <a href="#">Canada</a>
            <a href="#">Mexico</a>
            <a href="#">United States</a>
            <h3>South America</h3>
            <a href="#">Argentina</a>
            <a href="#">Chile</a>
            <a href="#">Peru</a>
          </div>
          <div>
            <h3>Europe / Middle East</h3>
            <a href="#">United Kingdom</a>
            <a href="#">Europe (EN)</a>
            <a href="#">Other Middle Eastern Countries</a>
            <h3>Africa</h3>
            <a href="#">South Africa</a>
          </div>
          <div>
            <h3>Asia</h3>
            <a href="#">Japan | 日本</a>
            <a href="#">Mainland China | 中国内地</a>
            <a href="#">ChinaTaiwan | 中国台湾</a>
            <a href="#">SouthKorea | 대한민국</a>
            <a href="#">India</a>
            <h3>Pacific</h3>
            <a href="#">Australia</a>
            <a href="#">New Zeeland</a>
          </div>
        </Language>
      )}
      {props.content === "card" && <Card />}
      {props.content === "search" && <Search onClose={props.onClose} />}
    </Container>
  );
};

export default DropDown;
