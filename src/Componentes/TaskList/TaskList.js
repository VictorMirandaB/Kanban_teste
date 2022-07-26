import "./TaskList.css";
import PropTypes from "prop-types";
import TaskItens from "../TaskItens/TaskItens";
import plusIco from "../img/plus.ico";

export default function TaskList({
  title,
  taskState,
  onAddTasks,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTasks("Nova Tarefa", taskState);
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
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista vazia</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIco} alt="sinal de mais" />
          Adicionar Tarefas
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
