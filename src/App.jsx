import { useState } from 'react';
import Sidebar from "./components/Sidebar";
import NoProjects from './components/NoProjects';
import AddProject from './components/AddProject';

const TEST_LIST = [
  {
    projectName: "Learning React",
    selected: true,
  },
  {
    projectName: "Mastering React",
    selected: false,
  }
];

function App() {

  const [projectList, setProjectList] = useState([]);
  const [isAddingProject, setIsAddingProject] = useState(false);

  function handleAddProjectButton() {
    if (!isAddingProject) {
      setIsAddingProject(true);
    }
  }

  function handleSaveProjectButton() {
    setIsAddingProject(false);
  }


  return (
    <>
      <main className="h-screen my-8 flex gap-8">

        <Sidebar
          projectList={TEST_LIST}
          addProject={handleAddProjectButton}
        />

        {isAddingProject ? <AddProject saveProject={handleSaveProjectButton} /> : <NoProjects addProject={handleAddProjectButton} />}
        {/* <AddProject /> */}

      </main>
    </>
  );
}

export default App;
