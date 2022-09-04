import { NextPage } from "next";
import Head from "next/head";
import Announcement from "../../components/Announcement";
import NewsLetter from "../../components/NewsLetter";
import Container from "../../components/UI/Container";
import Title from "../../components/UI/Title";

const SubscribePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>New Account</title>
        <link rel="icon" href="/favicon-32x32.webp" />
      </Head>
      <Announcement />
      <Title>New Account</Title>

      <NewsLetter />
    </>
  );
};
export default SubscribePage;
