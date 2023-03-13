import styled from "styled-components";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <MainContent />
      <Footer />
    </Wrapper>
  );
};

export default App;
