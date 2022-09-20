import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
import Button from "../Button/Button";
import { deleteCompletedTasks } from "../../actions/actions";

const TodoList = (props) => {
  const TodoItems = useSelector((state) => state.todoReducers.todos);
  const count = useSelector((state) => state.todoReducers.count);
  const dispatch = useDispatch();
  const deleteCompletedTasksHandler = () => {
    dispatch(deleteCompletedTasks());
  };

  return (
    <div>
      <ul className="goal-list">
        {count > 0 &&
          TodoItems.map((goal) => (
            <TodoItem
              key={goal.id}
              todoItem={{
                id: goal.id,
                title: goal.title,
                completed: goal.completed,
              }}
            />
          ))}
        {count === 0 && (
          <h3 className="emptytodo">Yipeeee no tasks for today!!!!!!</h3>
        )}
      </ul>
      <Button onClick={deleteCompletedTasksHandler}>Delete All completed tasks</Button>
    </div>
  );
};

export default TodoList;
