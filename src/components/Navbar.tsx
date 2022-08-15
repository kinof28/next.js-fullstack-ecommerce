import Link from "next/link";
import styled from "styled-components";
import { HiOutlineSearch, HiOutlineUser } from "react-icons/hi";
import { BsBag } from "react-icons/bs";
import { useState } from "react";
import DropDown from "./UI/DropDown";

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  background-color: black;
  color: white;
  padding: 0px 35px;
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
  text-transform: ${(props) => (props.support ? "capitalize" : "uppercase")};
  font-size: x-small;
  font-weight: ${(props) => (props.support ? "200" : "400")};
  transform: scaleY(0.9);
  &:hover {
    color: green;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Language = styled.img`
  height: 25px;
`;

const Icon = styled.div`
  margin-right: 30px;
  margin-top: 5px;
  font-size: 24px;
  cursor: pointer;
  & img {
    margin-left: 25px;
  }
`;

const Navbar = () => {
  const [displayDorpDown, setDisplayDropDown] = useState(false);
  const [dropDownContent, setDropDownContent] = useState("shop");

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Home>
              <Logo src="./logo.png"></Logo>
              <Title>Skullcandy</Title>
            </Home>
            <URL
              onMouseEnter={() => {
                setDisplayDropDown(true);
                setDropDownContent("shop");
              }}
              onMouseLeave={() => setDisplayDropDown(false)}
            >
              <Link href={"/shop"}>shop</Link>
            </URL>
            <URL
              onMouseEnter={() => {
                setDisplayDropDown(true);
                setDropDownContent("inside");
              }}
              onMouseLeave={() => setDisplayDropDown(false)}
            >
              <Link href={"/inside-skullcandy"}>Inside Skullcandy</Link>
            </URL>
          </Left>
          <Right>
            <URL
              support={true}
              onMouseEnter={() => {
                setDisplayDropDown(true);
                setDropDownContent("support");
              }}
              onMouseLeave={() => setDisplayDropDown(false)}
            >
              <Link href={"/support"}>Support</Link>
            </URL>
            <Icon>
              <Language
                src="./US_EN_FLAG.webp"
                onMouseEnter={() => {
                  setDisplayDropDown(true);
                  setDropDownContent("language");
                }}
                onMouseLeave={() => setDisplayDropDown(false)}
              />
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
        <DropDown displayed={displayDorpDown} content={dropDownContent} />
      </Container>
    </>
  );
};
export default Navbar;
