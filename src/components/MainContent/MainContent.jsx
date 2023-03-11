import styled from "styled-components";
import CardFacts from "../CardFacts/CardFacts";

const Wrapper = styled.body`
  display: flex;
  background: mintcream;
  justify-content: center;
  margin: 24px 0 24px 0;
  height: 100vh;
`;

const MainContent = () => {
  return (
    <Wrapper>
      <CardFacts />
    </Wrapper>
  );
};

export default MainContent;
