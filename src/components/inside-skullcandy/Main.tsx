import styled from "styled-components";
import MainSection from "./MainSection";

const Container = styled.div`
  display: flex;
  background-color: #1d1d1d;
  padding: 5rem;
`;
const Main = () => {
  return (
    <Container>
      <MainSection
        image="./inside-skullcandy/mission.avif"
        title="Mission"
        description="The principles that guide the way we work and play"
      />
      <MainSection
        image="./inside-skullcandy/culture.avif"
        title="Culture"
        description="Get a look at our unique office life in Park City, Utah."
      />
      <MainSection
        image="./inside-skullcandy/partnerships.avif"
        title="Partnerships"
        description="Learn how Skullcandy is doing well by going good."
      />
      <MainSection
        image="./inside-skullcandy/amplifiers.avif"
        title="Amplifiers"
        description="Meet the team that will help you find your frequency."
      />
      <MainSection
        image="./inside-skullcandy/sustainability.avif"
        title="Sustainability"
        description="Check out our initiatives for fighting climate change"
      />
    </Container>
  );
};
export default Main;
