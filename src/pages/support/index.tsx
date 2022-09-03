import styled from "styled-components";
import { NextPage } from "next";
import Head from "next/head";
import Container from "../../components/UI/Container";
import Category from "../../components/support/Category";

const Search = styled.input``;
const Categories = styled.div``;
const SupportPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Support</title>
        <link rel="icon" href="/favicon-32x32.webp" />
      </Head>
      <Search />
      <Categories>
        <Category
          title="Product Help."
          decription="Setup videos, user guides, and troubleshooting information."
        />
      </Categories>
      <Container>Support page</Container>
    </>
  );
};
export default SupportPage;
