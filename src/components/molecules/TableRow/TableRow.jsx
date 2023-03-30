import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import CurrentDateTimeText from "../../../utils/CurrentDate";

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Content = styled.h1`
  font-weight: bold;
  color: #fff;
`;

const Column = styled.td`
  padding: 20px;
  text-align: center;
`;

const TableRow = ({ title, description, colorFlag }) => {
  const Container = styled.tr(
    ({ color }) => css`
      background: ${color};
      width: 100%;
    `,
  );

  return (
    <Container color={colorFlag ? "#3e3e3e" : "#797979"}>
      <Column>
        <Content>{title}</Content>
      </Column>
      <Column>
        <Content>{description}</Content>
      </Column>
      <Column>
        <Content>{CurrentDateTimeText()}</Content>
      </Column>
      <Column>
        <Button background="#148AF1">
          <LinkWrapper to="/projects/tasks">Tasks</LinkWrapper>
        </Button>
      </Column>
      <Column>
        <Button background="#29A64F">
          <LinkWrapper to="/projects/1/edit">Edit</LinkWrapper>
        </Button>
      </Column>
      <Column>
        <Button background="#AF3B3B">
          <LinkWrapper to="/projects/1">Destroy</LinkWrapper>
        </Button>
      </Column>
    </Container>
  );
};

export default TableRow;
