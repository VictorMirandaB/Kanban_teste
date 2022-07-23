import "./TaskItens.css";
import PropTypes from "prop-types";

export default function TaskItens(id, title, taskState) {
  return <div>{title}</div>;
}
TaskItens.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
};
