import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { sortedTodos, removeTodo, completeTodo, importantTodo } = props
  return (
    <>
      {sortedTodos.map((todo) => {
        return (
          <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id}/>
        )
      })}
    </>
  );
};

export default TodoList;
