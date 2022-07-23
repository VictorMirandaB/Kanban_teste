import "./TaskList.css";
import PropTypes from "prop-types";
import TaskItens from "./Componentes/TaskItens/TaskItens";

export default function TaskList({ title, onAddTask, tasks }) {
  const addTask = () => {
    onAddTask("Nova Tarefa", "Pendente");
  };
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItens
              key={task.id}
              id={task.id}
              title={task.title}
              taskstate={task.state}
            />
          );
        })}
        <button onClick={onAddTask}>Adicionar Tarefas</button>
      </div>
    </div>
  );
}
TaskList.PropTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
