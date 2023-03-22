import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.header`
  display: flex;
  position: sticky;
  justify-content: space-between;
  background: cornflowerblue;
`;

const Header = () => {
  return (
    <Wrapper>
      Task Tracker
      <Link to="/projects">Projects</Link>
    </Wrapper>
  );
};

export default Header;
