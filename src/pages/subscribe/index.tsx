import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Announcement from "../../components/Announcement";
import NewsLetter from "../../components/NewsLetter";
import Input from "../../components/UI/Input";
import Title from "../../components/UI/Title";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 35%;
`;

const SubscribePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>New Account</title>
        <link rel="icon" href="/favicon-32x32.webp" />
      </Head>
      <Announcement />
      <Title>New Account</Title>
      <Container>
        <Wrapper>
          <Input type="email" label="E-mail address" required={true} />
          <Input type="password" label="Password" required={true} />
          <Input type="password" label="Confirm password" required={true} />
          <Input type="text" label="First name" required={true} />
          <Input type="text" label="Last name" required={true} />
          <Input type="text" label="Company Name" />
        </Wrapper>
      </Container>
      <NewsLetter />
    </>
  );
};
export default SubscribePage;
