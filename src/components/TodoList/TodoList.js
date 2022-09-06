import { useSelector } from "react-redux";
import React from "react";
import TodoItem from "../TodoItem/TodoItem";

import "./TodoList.css";

const TodoList = () => {
  const TodoItems = useSelector((state) => state.todo.todos);
  const count = useSelector((state) => state.todo.count);

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
                completed : goal.completed,
              }}
            />
          ))}
        {count === 0 && <h3 className="emptytodo">Yipeeee no tasks for today!!!!!!</h3>}
      </ul>
    </div>
  );
};

export default TodoList;
