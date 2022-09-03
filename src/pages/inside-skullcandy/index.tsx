import { NextPage } from "next";
import Head from "next/head";
import Announcement from "../../components/Announcement";
import Section from "../../components/inside-skullcandy/Section";
import Slider from "../../components/inside-skullcandy/Slider";
// import Container from "../../components/UI/Container";

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
      <Slider />
      <Section
        image="./inside-skullcandy/desktop_1.avif"
        title={
          <h2>
            Our Mission, <br />
            Vision <br /> and Values.
          </h2>
        }
        description="See the principles that guide the way we work and play."
        direct={true}
      />
      <Section
        image="./inside-skullcandy/desktop_2.avif"
        title={<h2>Our Culture</h2>}
        description="Get a look at our unique office life in park city, Utah."
        direct={false}
      />
      <Section
        image="./inside-skullcandy/desktop_3.avif"
        title={<h2>Our Charitable Partnerships.</h2>}
        description="Learn how Skullcandy is doing well by going good."
        direct={true}
      />
      <Section
        image="./inside-skullcandy/desktop_4.avif"
        title={
          <h2>
            Find your <br /> frequency.
          </h2>
        }
        description="Meet the team that will help you find your own frequency."
        direct={false}
      />
    </>
  );
};
export default InsideSkullcandyPage;
