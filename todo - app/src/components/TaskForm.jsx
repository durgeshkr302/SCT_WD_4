import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays, ArrowDownUp } from "lucide-react";

export default function TaskForm({ addTask, sortTasks, sortByDateAsc }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState(null);
  const [taskTime, setTaskTime] = useState("");

  const handleAdd = () => {
    addTask(taskTitle, taskDate, taskTime);
    setTaskTitle("");
    setTaskDate(null);
    setTaskTime("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Enter task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="px-3 py-2 text-sm rounded-md border shadow-sm w-64"
      />
      <div className="relative w-40">
        <CalendarDays className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <DatePicker
          selected={taskDate}
          onChange={(date) => setTaskDate(date)}
          dateFormat="MMM d, yyyy"
          placeholderText="Pick a date"
          className="pl-7 pr-3 py-2 text-sm rounded-md border shadow-sm w-full"
          calendarStartDay={1}
        />
      </div>
      <input
        type="time"
        value={taskTime}
        onChange={(e) => setTaskTime(e.target.value)}
        className="px-3 py-2 text-sm rounded-md border shadow-sm w-28"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 text-sm rounded-md bg-green-400 hover:bg-green-500 text-white"
      >
        Add Task
      </button>
      <button
        onClick={sortTasks}
        className="flex items-center gap-1 px-4 py-2 text-sm rounded-md bg-blue-200 hover:bg-blue-300 text-black"
      >
        <ArrowDownUp size={16} /> Sort by Date
      </button>
    </div>
  );
}