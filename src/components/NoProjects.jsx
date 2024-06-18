import imgLogo from "../assets/no-projects.png";

export default function NoProjects() {

  return (
    <div className="w-2/3 mt-32 flex flex-col justify-start items-center gap-4 ">
      <img className="w-16 h-16r"
        src={imgLogo}
        alt="empty clipboard"></img>
      <h1 className="text-2xl font-bold text-stone-600">No project selected</h1>
      <h2 className="text-lg text-stone-500">Select a project or get started with a new one</h2>
      <button className="mb-4 mt-4 bg-stone-700 text-stone-400 px-3 py-2 rounded-md text-lg hover:bg-stone-600 hover:text-stone-100">Create new project</button>
    </div>
  );


}