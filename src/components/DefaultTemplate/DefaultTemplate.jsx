import styled from "styled-components";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import Footer from "../Footer/Footer";
import CardFacts from "../CardFacts/CardFacts";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
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
