import Head from "next/head";
import styled from "styled-components";
import Announcement from "../../components/Announcement";
import NewsLetter from "../../components/NewsLetter";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import Title from "../../components/UI/Title";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 45%;
  margin-bottom: 7rem;
  & div#form-wrapper {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
  }
  & div#button {
    height: 3rem;
  }
  & div#input {
    width: 70%;
  }
  & p {
    font-size: 0.9rem;
  }
`;
const ResetPassword = () => {
  return (
    <>
      <Head>
        <title>Reset Password</title>
        <link rel="icon" href="/favicon-32x32.webp" />
      </Head>
      <Announcement />
      <Title>Reset Password</Title>
      <Container>
        <Wrapper>
          <p>
            Fill in your email below to request a new password. An email will be
            sent to the address below containing a link to verify your email
            address.
          </p>
          <div id="form-wrapper">
            <div id="input">
              <Input type="email" label="Email Address" />
            </div>
            <div id="button">
              <Button value="Reset Password" dark={true} />
            </div>
          </div>
        </Wrapper>
      </Container>
      <NewsLetter />
    </>
  );
};
export default ResetPassword;
