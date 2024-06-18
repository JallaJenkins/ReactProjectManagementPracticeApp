export default function Sidebar({ projectList }) {

  const classSelectedItem = "mb-4 bg-stone-800 hover:bg-stone-700";
  const classItem = "mb-4 text-stone-400 hover:bg-stone-700 hover:text-stone-300";
  const classItemButton = "w-full text-left";

  console.log(projectList);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">

      <h2 className="mb-8 font-bold uppercase md:text-2xl text-stone-200">YOUR PROJECTS</h2>

      <button className="mb-4 bg-stone-700 text-stone-400 px-3 py-2 rounded-md text-lg hover:bg-stone-600 hover:text-stone-100">+ Add project</button>

      <ul className="mt-8 text-stone-200 text-xl">

        {projectList.map(project => {
          return (<li
            key={project.projectName}
            className={project.selected ? classSelectedItem : classItem}>
            <button className={classItemButton}>
              {project.projectName}
            </button>
          </li>)
        })}
      </ul>

    </aside>
  );
}