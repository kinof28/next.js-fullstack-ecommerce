import styled from "styled-components";
import { NextPage } from "next";
import Head from "next/head";
import Category from "../../components/support/Category";
import NewsLetter from "../../components/NewsLetter";
import { HiOutlineSearch } from "react-icons/hi";

const Container = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  padding: 4rem;
`;
const Search = styled.div`
  position: relative;
  & input {
    width: 100%;
    height: 10vh;
    outline: none;
    border: none;
    margin: 5rem 0px;
    padding: 0px 2rem 0px 5rem;
    font-size: 1.1rem;
    font-weight: 600;
  }
  & div#logo {
    position: absolute;
    left: 0;
    top: 0;
    height: 10vh;
    width: 5rem;
    margin: 5rem 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 2rem;
  }
`;
const Categories = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 8rem;
`;
const SupportPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Support</title>
        <link rel="icon" href="/favicon-32x32.webp" />
      </Head>
      <Container>
        <Search>
          <input type="text" placeholder="Search the Skullcandy Help Center" />
          <div id="logo">
            <HiOutlineSearch />
          </div>
        </Search>
        <Categories>
          <Category
            title="Product Help."
            description="Setup videos, user guides, and troubleshooting information."
          />
          <Category
            title="Order Status."
            description="Order status and tracking."
          />
          <Category
            title="Warranty."
            description="how to submit a warranty claim."
          />
          <Category title="Returns." description="Returns and refund policy." />
          <Category
            title="Contact Skullcandy."
            description="How to get in touch with custumer service in your region."
          />
          <Category
            title="Ordering Information."
            description="Billing, shipping, and ordering information"
          />
          <Category
            title="Registration."
            description="Register your skullcandy product."
          />
          <Category title="Legal." description="Legal information." />
        </Categories>
      </Container>
      <NewsLetter />
    </>
  );
};
export default SupportPage;
