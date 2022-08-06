import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import Announcement from "../components/Announcement";
import Container from "../components/UI/Container";
import Models from "../components/home/Models";
import Trending from "../components/home/Trending";

const Image = styled.img`
  width: 100%;
  cursor: pointer;
`;

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Skullcandy Headphones, True Wireless Earbuds, Speakers &amp; More
        </title>
        <meta
          name="description"
          content="Discover life at full volume with headphones, earbuds, speakers &amp; more.
          Skullcandy is your one-stop shop for new music, culture &amp; 
          audio built to #STAYLOUD."
        ></meta>
        <link rel="icon" href="/favicon-32x32.webp" />
      </Head>
      <Announcement />
      <Models />
      <Trending />
      <Image src="./workshop.avif" alt="Workshop" />
      <Image src="./find-love.avif" alt="Find Love" />
      {/* <Container>main page</Container> */}
    </>
  );
};

export default IndexPage;
