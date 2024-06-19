import { useRef } from 'react';

export default function AddProject({ saveProject, cancel }) {

  const refTitle = useRef();
  const refDescription = useRef();
  const refDueDate = useRef();

  const classLabel = "text-lg text-stone-600 uppercase font-bold";
  const classInput = "mb-4 text-lg bg-stone-200 border-b-4 border-stone-300 focus:outline-none focus:border-b-4 focus:border-stone-500";

  return (
    <form className="w-2/3 mt-16 mr-36 flex flex-col">

      <menu className="w-full flex flex-row-reverse gap-4">
        <button
          className="mb-4 mt-4 bg-stone-900 text-stone-200 px-6 py-2 rounded-md text-lg hover:bg-stone-600 hover:text-stone-100"
          value="Save!"
          onClick={() => saveProject(refTitle.current.value, refDescription.current.value, refDueDate.current.value)}
        >
          Save
        </button>
        <button
          className="mb-4 mt-4 px-2 py-2 rounded-md text-lg hover:bg-stone-600 hover:text-stone-100"
          onClick={cancel}
          type="button"
        >
          Cancel
        </button>
      </menu>

      <label
        className={classLabel}
        htmlFor="id-title"
      >
        Title
      </label>
      <input
        className={classInput + " h-10"}
        id="id-title"
        ref={refTitle} />

      <label
        className={classLabel}
        htmlFor="id-description"
      >
        Description
      </label>
      <textarea
        className={classInput + " h-24"}
        id="id-description"
        ref={refDescription} />

      <label
        className={classLabel}
        htmlFor="id-due-date"
      >
        Due Date
      </label>
      <input
        className={classInput + " h-10"}
        type="date"
        id="id-due-date"
        ref={refDueDate} />

    </form>
  );
}