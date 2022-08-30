import { NextPage } from "next";
import Head from "next/head";
import Announcement from "../../components/Announcement";
import { useState } from "react";
import Filter from "../../components/shop/Filter";
import Products from "../../components/shop/Products";
import Title from "../../components/UI/Title";

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
