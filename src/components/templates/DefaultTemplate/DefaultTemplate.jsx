import styled from "styled-components";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import CardFacts from "../../molecules/CardFacts/CardFacts";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const MainContent = styled.main`
  display: flex;
  background: mintcream;
  justify-content: center;
`;

const DefaultTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <MainContent>
        {children}
        {CardFacts()}
      </MainContent>
      <Footer />
    </Wrapper>
  );
};

export default DefaultTemplate;
