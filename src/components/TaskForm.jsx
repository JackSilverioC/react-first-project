import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleTextarea = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-zinc-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea:</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          type="text"
          placeholder="Escribe tu tarea"
          onChange={handleInput}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          placeholder="Escribe una descripción de la tarea"
          onChange={handleTextarea}
          value={description}
        ></textarea>
        <button
          className=" bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400"
          type="submit"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
