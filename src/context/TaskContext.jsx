import { PropTypes } from "prop-types";
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/Tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask({ title, description }) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: title,
        description: description
      }
    ]);
  }

  function deleteTask({ id }) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

TaskContextProvider.propTypes = {
  children: PropTypes.node
};
