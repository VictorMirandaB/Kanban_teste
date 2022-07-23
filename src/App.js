import "./styles.css";
import NavBar from "./Componentes/Navbar/Navbar";
import TaskList from "./Componentes/TaskList/TaskList";
import React, { useState } from "react";

const task = {
  id: 0,
  title: "Nova Tarefa",
  state: "Pendente"
};
let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};
export default function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (title, state) => {
    const newTask = { id: generateId(), title, state };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <TaskList title="Pendente" onAddTasks={addTask} tasks={tasks} />
        <TaskList title="Fazendo" />
        <TaskList title="Concluído" />
      </div>
    </div>
  );
}
