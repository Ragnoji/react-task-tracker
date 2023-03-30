import styled from "styled-components";
import Button from "../../atoms/Button/Button";

const TableStyled = styled.table`
  background: #3e3e3e;
  width: 100%;
`;

const TableHeader = styled.th`
  padding: 10px 20px;
  color: #fff;
  font-size: 1.2rem;
`;

const Header = styled.div`
  background: #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Table = ({ children, title }) => {
  const onClick = () => {
    // eslint-disable-next-line no-alert
    alert("fake");
  };

  return (
    <>
      <Header>
        <Title>{title}</Title>
        <Button label="New Project" color="#eee" onClick={onClick} />
      </Header>
      <TableStyled>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Created at</TableHeader>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </TableStyled>
    </>
  );
};

export default Table;
