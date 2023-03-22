import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages";
import ProjectsIndex from "./pages/projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsIndex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
