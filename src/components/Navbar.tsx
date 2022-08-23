import Link from "next/link";
import styled from "styled-components";
import { HiOutlineSearch, HiOutlineUser } from "react-icons/hi";
import { BsBag, BsWindowSidebar } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import DropDown from "./UI/DropDown";

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
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
  transition: all 0.25s ease-out;
  opacity: ${(props) => (props.top ? 1 : 0)};
  width: ${(props) => (props.top ? "11vw" : "0vw")};
`;

const Home = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const URL = styled.div`
  padding: 0px 0px;
  margin-left: 30px;
  text-transform: ${(props) => (props.support ? "capitalize" : "uppercase")};
  font-size: x-small;
  font-weight: ${(props) => (props.support ? "200" : "400")};
  transform: scaleY(0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  & a {
    margin: 12px 0px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Language = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    height: 25px;

    margin: 4px 0px;
  }
  margin-left: 25px;
`;

const Icon = styled.div`
  margin-right: 30px;
  margin-top: 5px;
  font-size: 24px;
  cursor: pointer;
`;
const BorderBottom = styled.div`
  height: 2px;
  width: ${(props) => (props.displayed ? "100%" : "0%")};
  background-color: #969696;
  transition: width 0.25s ease-out;
`;
const PlaceHolder = styled.div`
  height: 3.5rem;
`;
const Navbar = (props) => {
  const [dropDownContent, setDropDownContent] = useState("shop");
  const [top, setTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) setTop(true);
      else if (top) setTop(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Home>
              <Logo src="./logo.png"></Logo>
              <Title top={top}>Skullcandy</Title>
            </Home>
            <URL
              onMouseEnter={() => {
                props.dropDown();
                setDropDownContent("shop");
              }}
            >
              <Link href={"/shop"}>shop</Link>
              <BorderBottom
                displayed={props.displayed && dropDownContent === "shop"}
              ></BorderBottom>
            </URL>
            <URL
              onMouseEnter={() => {
                props.dropDown();
                setDropDownContent("inside");
              }}
            >
              <Link href={"/inside-skullcandy"}>Inside Skullcandy</Link>
              <BorderBottom
                displayed={props.displayed && dropDownContent === "inside"}
              ></BorderBottom>
            </URL>
          </Left>
          <Right>
            <URL
              support={true}
              onMouseEnter={() => {
                props.dropDown();
                setDropDownContent("support");
              }}
            >
              <Link href={"/support"}>Support</Link>
              <BorderBottom
                displayed={props.displayed && dropDownContent === "support"}
              ></BorderBottom>
            </URL>
            <Icon>
              <Language>
                <img
                  src="./US_EN_FLAG.webp"
                  onMouseEnter={() => {
                    props.dropDown();
                    setDropDownContent("language");
                  }}
                />
                <BorderBottom
                  displayed={props.displayed && dropDownContent === "language"}
                ></BorderBottom>
              </Language>
            </Icon>
            <Icon>
              <HiOutlineUser
                onMouseEnter={() => {
                  props.dropUp();
                }}
              />
            </Icon>
            <Icon>
              <HiOutlineSearch
                onMouseEnter={() => {
                  props.dropUp();
                }}
              />
            </Icon>
            <Icon>
              <BsBag
                onMouseEnter={() => {
                  props.dropUp();
                }}
              />
            </Icon>
          </Right>
        </Wrapper>
        <DropDown displayed={props.displayed} content={dropDownContent} />
      </Container>
      <PlaceHolder></PlaceHolder>
    </>
  );
};
export default Navbar;
