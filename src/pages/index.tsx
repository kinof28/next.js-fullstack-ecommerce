import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import Announcement from "../components/Announcement";
import Models from "../components/home/Models";
import Trending from "../components/home/Trending";
import NewsLetter from "../components/NewsLetter";

const Image = styled.img`
  width: 100%;
  cursor: pointer;
  margin-top: ${(props) => props.second && "-4px"};
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
      <Image src="./find-love.avif" alt="Find Love" second={true} />
      <NewsLetter />
      {/* <Container>main page</Container> */}
    </>
  );
};

export default IndexPage;
