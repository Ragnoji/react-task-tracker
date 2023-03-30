import { useState } from "react";
import TableRow from "../components/molecules/TableRow/TableRow";
import Table from "../components/organisms/Table/Table";

const ProjectsIndex = () => {
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
  ]);

  return (
    <Table title="Projects">
      {projects?.map((val) => (
        <TableRow key={val.id} title={val.title} description={val.description} colorFlag={val.id % 2 === 0 && true} />
      ))}
    </Table>
  );
};

export default ProjectsIndex;
