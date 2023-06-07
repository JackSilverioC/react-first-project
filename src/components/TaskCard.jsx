import { PropTypes } from "prop-types";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ id, title, description }) {
  const { deleteTask } = useContext(TaskContext);

  function handleDelete() {
    deleteTask({
      id
    });
  }

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{title}</h1>
      <p className="text-gray-500 text-sm">{description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={handleDelete}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;

TaskCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
