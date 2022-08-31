import { NextPage } from "next";
import Head from "next/head";
import Announcement from "../../components/Announcement";
import Container from "../../components/UI/Container";

const InsideSkullcandyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Inside Skullcandy - Learn about Our Mission, Vision and Values...
        </title>
        <link rel="icon" href="/favicon-32x32.webp" />
      </Head>
      <Announcement />
      <Container>this is inside skullcandy page</Container>
    </>
  );
};
export default InsideSkullcandyPage;
