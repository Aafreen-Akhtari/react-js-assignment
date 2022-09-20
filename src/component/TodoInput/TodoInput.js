import React, { useState } from "react";

import Button from "../Button/Button";
import styles from "./TodoInput.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  addText,
  addTodo,
  cancelEdit,
  addEditedTodo,
} from "../../actions/actions";

const TodoInput = (props) => {
  const dispatch = useDispatch();
  let text = useSelector((state) => state.todoReducers.text);
  const selected = useSelector((state) => state.todoReducers.selected);
  const editId = useSelector((state) => state.todoReducers.edit);

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    dispatch(addText(event.target.value));
  };
  const cancelHandler = () => {
    if (text === "") {
      setIsValid(true);
    }
    dispatch(cancelEdit());
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (text.trim().length === 0) {
      setIsValid(false);
      return;
    }
    if (selected) {
      dispatch(addEditedTodo(editId, text));
    } else {
      dispatch(addTodo(text));
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={text} />
      </div>
      <Button type="submit">Add Goal</Button>
      {selected && (
        <Button type="button" onClick={cancelHandler}>
          Cancel
        </Button>
      )}
      
    </form>
  );
};

export default TodoInput;
