import { useEffect, useState } from "react";
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
  flex-direction: column;
`;

const BackToTop = styled.button`
  position: fixed;
  top: 30px;
  right: 20px;
  font-size: 24px;
  background: dimgray;
  color: white;
  cursor: pointer;
  border-radius: 100px;
  border: none;
  box-shadow: 0 5px 10px #ccc;
  z-index: 100;
`;

const DefaultTemplate = ({ children }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <Wrapper>
      <Header />
      <MainContent>
        {showButton && <BackToTop onClick={scrollToTop}>Scroll to top</BackToTop>}
        {children}
      </MainContent>
      <Footer />
    </Wrapper>
  );
};

export default DefaultTemplate;
