import React from "react";
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux/es/exports";
import { todoActions } from "../../store/todo-slice";
import { useSelector } from "react-redux";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { id, title, completed } = props.todoItem;
  const selected = useSelector((state) => state.todo.selected);
  const dispatch = useDispatch();

  const onEditToggle = () => {
    dispatch(todoActions.editTodo(id));
  };
  const handleCheckboxClick = () => {
    dispatch(todoActions.toggleComplete({ id, completed: !completed }));
  };
  const deleteHandler = () => {
    if (selected) {
      if (window.confirm("You want to delete this task instead of editing")) {
        dispatch(todoActions.cancelEdit());
        dispatch(todoActions.removeTodo(id));
      } else {
        return;
      }
    } else {
      dispatch(todoActions.removeTodo(id));
    }
  };

  return (
    <li className="goal-item">
      <span className={completed ? "status" : ""}>
        <input
          type="checkbox"
          className="checkbox"
          onClick={handleCheckboxClick}
        ></input>
        {title}
      </span>
      <span className="todo-action">
        <AiOutlineCloseCircle
          className="action-icons"
          onClick={deleteHandler}
        />
        <AiFillEdit className="action-icons" onClick={onEditToggle} />
      </span>
    </li>
  );
};

export default TodoItem;
