import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  background: mintcream;
  justify-content: center;
`;

const MainContent = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainContent;
