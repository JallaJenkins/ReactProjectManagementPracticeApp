import { useState } from 'react';
import Sidebar from "./components/Sidebar";
import NoProjects from './components/NoProjects';

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

// console.log(TEST_LIST);


function App() {

  const [projectList, setProjectList] = useState([]);
  const [addingProject, setAddingProject] = useState(false);

  // setTaskList(TEST_LIST);


  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar projectList={TEST_LIST} />
        <NoProjects />
      </main>
    </>
  );
}

export default App;
