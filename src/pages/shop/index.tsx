import { NextPage } from "next";
import Head from "next/head";
import Announcement from "../../components/Announcement";
import styled from "styled-components";
import { useState } from "react";
import Filter from "../../components/shop/Filter";
import Products from "../../components/shop/Products";

const Title = styled.h1`
  text-align: center;
`;
const ShopPage: NextPage = () => {
  const [title, setTitle] = useState("Shop");
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Announcement />
      <Title>{title}</Title>
      <Filter />
      <Products />
    </>
  );
};
export default ShopPage;
