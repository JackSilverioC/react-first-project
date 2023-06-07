import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <main className="bg-zinc-900 h-screen w-screen flex items-center justify-center p-10 flex-col">
      <div className="p-5 rounded-md shadow-md w-full flex flex-col gap-5 flex-1 justify-center items-center border-2">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
