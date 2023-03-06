import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  position: sticky;
  justify-content: space-between;
  background: cornflowerblue;
`;

const Header = () => {
  return <Wrapper>Text Header</Wrapper>;
};

export default Header;
