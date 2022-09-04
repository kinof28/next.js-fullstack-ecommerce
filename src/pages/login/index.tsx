import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Announcement from "../../components/Announcement";
import NewsLetter from "../../components/NewsLetter";
import Button from "../../components/UI/Button";
import Title from "../../components/UI/Title";

const Container = styled.div`
  display: flex;
  & div {
    flex: 1;
  }
`;
const Left = styled.div`
  border: 2px solid red;
  min-width: 50%;
`;
const Right = styled.div`
  background-color: #ddd;
  padding: 3rem;
  margin: 1rem 5rem 5rem 2rem;
  font-size: 0.9rem;
  color: #383838;
  line-height: 1.2rem;
  & h3 {
    margin: 0;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1.3rem;
    letter-spacing: -2px;
    margin-bottom: 1rem;
    color: black;
  }
  & ul {
    margin: 0;
    margin-bottom: 2rem;
    list-style-type: disc;
  }
  & li {
    padding: 0px 15px;
  }
  & li::marker {
    font-size: 0.5rem;
  }
`;
const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign in</title>
        <link rel="icon" href="/favicon-32x32.webp" />
      </Head>
      <Announcement />
      <Title>Sign in</Title>
      <Container>
        <Left></Left>
        <Right>
          <h3>New Customer?</h3>
          Create an account with us and you'll be able to:
          <ul>
            <li>Check out faster</li>
            <li>Save multiple shipping addresses</li>
            <li>Access your order history</li>
            <li>Track new orders</li>
          </ul>
          <Button
            value="create account"
            dark={true}
            onClick={() => console.log("sign up clicked")}
          />
        </Right>
      </Container>
      <NewsLetter />
    </>
  );
};
export default LoginPage;
