import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/UI/Container";

import styles from "../styles/Home.module.css";

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
      <div className={styles.container}>
        <Container>main page</Container>
      </div>
    </>
  );
};

export default IndexPage;
