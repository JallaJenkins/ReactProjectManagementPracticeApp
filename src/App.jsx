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

  const [projectList, setProjectList] = useState(TEST_LIST);
  const [isAddingProject, setIsAddingProject] = useState(false);

  function handleAddProjectButton() {
    if (!isAddingProject) {
      setIsAddingProject(true);
    }
  }

  function handleSaveProjectButton(title, description, dueDate) {
    console.log(title, description, dueDate);
    setProjectList(prevList => {
      prevList.push({
        projectName: title,
        description: description,
        dueDate: dueDate,
      });
      return prevList;
    })
    console.log(projectList);
    // setIsAddingProject(false);
  }

  function handleCancelButton() {
    setIsAddingProject(false);
  }


  return (
    <>
      <main className="h-screen my-8 flex gap-8">

        <Sidebar
          projectList={projectList}
          addProject={handleAddProjectButton}
        />

        {isAddingProject ? <AddProject
          saveProject={handleSaveProjectButton}
          cancel={handleCancelButton} /> : <NoProjects addProject={handleAddProjectButton} />}
        {/* <AddProject /> */}

      </main>
    </>
  );
}

export default App;
