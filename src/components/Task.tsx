type TaskProps = {
  task: {
    id: string;
    title: string;
    state: "DEFAULT" | "PINNED" | "ARCHIVED";
  };
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }: TaskProps) => (
  <div
    className={`flex justify-between p-4 border ${
      state === "ARCHIVED" ? "bg-gray-200" : "bg-white"
    }`}
  >
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={state === "ARCHIVED"}
        className="text-blue-500"
        onClick={() => onArchiveTask(id)}
      />
      <span className={`${state === "ARCHIVED" ? "line-through" : ""}`}>{title}</span>
    </label>
    {state !== "ARCHIVED" && (
      <button
        onClick={() => onPinTask(id)}
        className={`p-1 ${
          state === "PINNED"
            ? "text-blue-500 hover:text-blue-800"
            : "text-gray-400 hover:text-gray-800"
        } `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M6 2a1 1 0 00-1 1v12a1 1 0 001.707.707L10 13.414l3.293 3.293A1 1 0 0015 15V3a1 1 0 00-1-1H6z" />
        </svg>
      </button>
    )}
  </div>
);

export default Task;
