import React, { useState } from "react";

import Button from "../Button/Button";
import styles from "./TodoInput.module.css";
import { useDispatch } from "react-redux/es/exports";
import { todoActions } from "../../store/todo-slice";
import { useSelector } from "react-redux/es/exports";

const TodoInput = (props) => {
  const dispatch = useDispatch();

  let text = useSelector((state) => state.todo.text);
  const selected = useSelector((state) => state.todo.selected);
  const editId = useSelector((state) => state.todo.edit);

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    dispatch(todoActions.addText(event.target.value));
  };
  const cancelHandler = () => {
    if (text === "") {
      setIsValid(true);
    }
    dispatch(todoActions.cancelEdit());
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (text.trim().length === 0) {
      setIsValid(false);
      return;
    }
    if (selected) {
      dispatch(todoActions.addEditedTodo({ id: editId, title: text }));
    } else {
      dispatch(todoActions.addTodo(text));
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={text}
          placeholder="Enter your todo..."
        />
      </div>
      <Button type="submit">{selected ? "Edit" : "Add Goal"}</Button>
      {selected && (
        <Button type="button" onClick={cancelHandler}>
          Cancel
        </Button>
      )}
    </form>
  );
};

export default TodoInput;
