import type { NextPage } from "next";
import Head from "next/head";
import Announcement from "../components/Announcement";
import Container from "../components/UI/Container";

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
      <Container>main page</Container>
    </>
  );
};

export default IndexPage;
