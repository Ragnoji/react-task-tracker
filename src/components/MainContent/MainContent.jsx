import styled from "styled-components";
import CardFacts from "../CardFacts/CardFacts";

const Wrapper = styled.main`
  display: flex;
  background: mintcream;
  justify-content: center;
`;

const MainContent = () => {
  return (
    <Wrapper>
      <CardFacts />
    </Wrapper>
  );
};

export default MainContent;
