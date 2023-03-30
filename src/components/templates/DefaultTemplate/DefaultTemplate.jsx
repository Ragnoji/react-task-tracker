import styled from "styled-components";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

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
      <MainContent>{children}</MainContent>
      <Footer />
    </Wrapper>
  );
};

export default DefaultTemplate;
