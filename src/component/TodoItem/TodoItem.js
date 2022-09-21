import React from "react";
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  toggleComplete,
  cancelEdit,
  editTodo,
} from "../../actions/actions";

import "./TodoItem.css";

const TodoItem = (props) => {
  const { id, title, completed } = props.todoItem;
  const selected = useSelector((state) => state.todoReducers.selected);

  const dispatch = useDispatch();

  const deleteHandler = () => {
    if (selected) {
      if (window.confirm("You want to delete this task instead of editing")) {
        dispatch(cancelEdit());

        dispatch(removeTodo(id));
      } else {
        return;
      }
    } else {
      dispatch(removeTodo(id));
    }
  };
  const handleCheckboxClick = () => {
    dispatch(toggleComplete(id));
    
  };

  const onEditToggle = () => {
    dispatch(editTodo(id));
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
