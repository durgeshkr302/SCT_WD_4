import { format } from "date-fns";

export default function TaskCard({ task, onToggle, onDelete, onEdit, index }) {
  const formatSmartDate = (date) => {
    if (!date) return "No date";
    const minutes = date.getMinutes();
    const formatted = minutes === 0 ? format(date, "MMM d, h aa") : format(date, "MMM d, h:mm aa");
    return formatted;
  };

  return (
    <div
      className={`rounded-md shadow-md p-2 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
        task.completed ? "bg-gray-300" : task.color
      }`}
      style={{ transform: task.completed ? "rotate(-2deg) scale(0.98)" : "rotate(-1deg) scale(1)" }}
    >
      <textarea
        value={task.title}
        onChange={(e) => onEdit(index, e.target.value)}
        className={`text-sm font-semibold w-full bg-transparent focus:outline-none resize-none overflow-auto max-h-32 ${
          task.completed ? "line-through text-gray-600" : "text-black"
        }`}
      />
      <span className="text-[11px] text-gray-700 mt-1">{formatSmartDate(task.date)}</span>
      <div className="flex justify-between items-center mt-auto">
        <button
          onClick={() => onToggle(index)}
          className="text-[13px] px-2 py-1 rounded bg-black text-white"
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => onDelete(index)}
          className="text-[13px] px-2 py-1 rounded bg-red-400 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
