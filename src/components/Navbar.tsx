import Link from "next/link";
import styled from "styled-components";
import { HiOutlineSearch, HiOutlineUser } from "react-icons/hi";
import { BsBag } from "react-icons/bs";

const Container = styled.div`
  background-color: black;
  color: white;
  padding: 0px 35px;
`;

const Wrapper = styled.div`
  margin-top: -5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 65px;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  margin-left: -20px;
  letter-spacing: -1px;
  transition: 2s all ease;
  &:hover {
    /* display: none; */
    /* opacity: 0; */
    /* width: 0px; */
  }
`;

const Home = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: 20px; */
  &:hover {
    cursor: pointer;
  }
`;

const URL = styled.div`
  padding: 0px 0px;
  padding-left: 30px;
  text-transform: uppercase;
  font-size: x-small;
  font-weight: 400;
  transform: scaleY(0.9);
  &:hover {
    color: green;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Language = styled.img`
  height: 25px;
`;

const Icon = styled.div`
  padding-right: 25px;
  font-size: 30px;
  font-weight: 100;
  & img {
    margin-left: 25px;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Home>
            <Logo src="./logo.png"></Logo>
            <Title>Skullcandy</Title>
          </Home>
          <URL>
            <Link href={"/shop"}>shop</Link>
          </URL>
          <URL>
            <Link href={"/inside-skullcandy"}>Inside Skullcandy</Link>
          </URL>
        </Left>
        <Right>
          <URL>
            <Link href={"/support"}>Support</Link>
          </URL>
          <Icon>
            <Language src="./US_EN_FLAG.webp"></Language>
          </Icon>
          <Icon>
            <HiOutlineUser />
          </Icon>
          <Icon>
            <HiOutlineSearch />
          </Icon>
          <Icon>
            <BsBag />
          </Icon>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
