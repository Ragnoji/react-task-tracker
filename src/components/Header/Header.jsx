import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  position: sticky;
  justify-content: space-between;
  background: cornflowerblue;
`;

const Header = () => {
  return <Wrapper>Task Tracker</Wrapper>;
};

export default Header;
