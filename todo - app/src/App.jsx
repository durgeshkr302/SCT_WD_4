import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskGrid from "./components/TaskGrid";

const colors = ["bg-yellow-100", "bg-pink-100", "bg-blue-100", "bg-green-100", "bg-purple-100", "bg-orange-100"];

function App() {
  const [tasks, setTasks] = useState([]);
  const [popup, setPopup] = useState(false);
  const [sortByDateAsc, setSortByDateAsc] = useState(true);

  const addTask = (title, date, time) => {
    if (!title.trim()) return;
    let finalDate = date;
    if (date && time) {
      const [hours, minutes] = time.split(":");
      finalDate = new Date(date);
      finalDate.setHours(parseInt(hours));
      finalDate.setMinutes(parseInt(minutes));
    }
    const newTask = {
      title,
      date: finalDate,
      completed: false,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
    setPopup(true);
    setTimeout(() => setPopup(false), 1200);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const editTask = (index, newTitle) => {
    const updated = [...tasks];
    updated[index].title = newTitle;
    setTasks(updated);
  };

  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return sortByDateAsc ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
    });
    setTasks(sortedTasks);
    setSortByDateAsc(!sortByDateAsc);
  };

  return (
    <div className="min-h-screen bg-[#fdfcf7] p-6 relative overflow-hidden">
      <Header />
      <TaskForm addTask={addTask} sortTasks={sortTasks} sortByDateAsc={sortByDateAsc} />
      <TaskGrid tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} />
      {popup && (
        <div className="absolute top-10 right-10 bg-black text-white text-sm px-4 py-2 rounded shadow-lg animate-bounce">
          Task status changed!
        </div>
      )}
    </div>
  );
}

export default App;
