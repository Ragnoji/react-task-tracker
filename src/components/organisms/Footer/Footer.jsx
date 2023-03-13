import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  background: cornflowerblue;
  height: 64px;
  font-size: xx-small;
  font-weight: normal;
  padding-top: 12px;
`;

const Footer = () => {
  return <Wrapper>©️ 2023 Almaz Stepanov</Wrapper>;
};

export default Footer;
