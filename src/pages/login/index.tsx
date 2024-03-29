import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Announcement from "../../components/Announcement";
import NewsLetter from "../../components/NewsLetter";
import Button from "../../components/UI/Button";
import Checkbox from "../../components/UI/Checkbox";
import Input from "../../components/UI/Input";
import Title from "../../components/UI/Title";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  min-width: 50%;
  padding: 3rem 1rem 1rem 4.5rem;
  & div#action {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  & a {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 10px;
    transition: color 0.2s ease-out;
  }
  & a:hover {
    color: grey;
  }
`;
const Right = styled.div`
  flex: 1;
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
  const router = useRouter();
  const gotoSubscribePage = () => {
    router.push("/subscribe");
  };
  return (
    <>
      <Head>
        <title>Sign in</title>
        <link rel="icon" href="/favicon-32x32.webp" />
      </Head>
      <Announcement />
      <Title>Sign in</Title>
      <Container>
        <Left>
          <Input type="email" label="Email Address:" />
          <Input type="password" label="Password:" />
          <Checkbox />
          <div id="action">
            <div>
              <Button value="sign in" dark={true} />
            </div>
            <Link href="/reset-password">Forgot your password?</Link>
          </div>
        </Left>
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
            onClick={() => gotoSubscribePage()}
          />
        </Right>
      </Container>
      <NewsLetter />
    </>
  );
};
export default LoginPage;
