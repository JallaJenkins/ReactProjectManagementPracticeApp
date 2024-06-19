export default function AddProject({ saveProject }) {
  return (
    <div className="w-2/3 mt-16 mr-36 flex flex-col">
      <menu className="w-full flex flex-row-reverse gap-4">
        <button
          className="mb-4 mt-4 bg-stone-900 text-stone-200 px-6 py-2 rounded-md text-lg hover:bg-stone-600 hover:text-stone-100"
          onClick={saveProject}
        >
          Save

        </button>
        <button
          className="mb-4 mt-4 px-2 py-2 rounded-md text-lg hover:bg-stone-600 hover:text-stone-100"
        >
          Cancel
        </button>
      </menu>
    </div>
  );
}