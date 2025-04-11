import TaskCard from "./TaskCard";

export default function TaskGrid({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
      {tasks.map((task, idx) => (
        <TaskCard
          key={idx}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          index={idx}
        />
      ))}
    </div>
  );
}