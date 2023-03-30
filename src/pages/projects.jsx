import { useState } from "react";
import TableRow from "../components/molecules/TableRow/TableRow";
import Table from "../components/organisms/Table/Table";
import DefaultTemplate from "../components/templates/DefaultTemplate/DefaultTemplate";

const ProjectsPage = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "1 project",
      description: "bla bla",
    },
    {
      id: 2,
      title: "2 project",
      description: "bla bla",
    },
    {
      id: 3,
      title: "3 project",
      description: "bla bla",
    },
    {
      id: 4,
      title: "4 project",
      description: "bla bla",
    },
    {
      id: 5,
      title: "5 project",
      description: "bla bla",
    },
    {
      id: 6,
      title: "6 project",
      description: "bla bla",
    },
    {
      id: 7,
      title: "7 project",
      description: "bla bla",
    },
    {
      id: 8,
      title: "8 project",
      description: "bla bla",
    },
    {
      id: 9,
      title: "9 project",
      description: "bla bla",
    },
    {
      id: 10,
      title: "10 project",
      description: "bla bla",
    },
    {
      id: 11,
      title: "11 project",
      description: "bla bla",
    },
    {
      id: 12,
      title: "12 project",
      description: "bla bla",
    },
    {
      id: 13,
      title: "13 project",
      description: "bla bla",
    },
  ]);

  return (
    <DefaultTemplate>
      <Table title="Projects">
        {projects?.map((val) => (
          <TableRow key={val.id} title={val.title} description={val.description} colorFlag={val.id % 2 === 0} />
        ))}
      </Table>
    </DefaultTemplate>
  );
};

export default ProjectsPage;
