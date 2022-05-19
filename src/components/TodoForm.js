import React, { useState } from "react";


export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.addTodo(input)
    setInput("")
  }
  const changeHandler = (e) =>{
    if(e.target.value.trim().length > 0){
      setIsValid(true);
    }
    setInput(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input}
        onChange={changeHandler}
        // className="todo-input"
        className={`todo-input ${!isValid ? "redBorder" : ""}`}
        placeholder="Add a todo"
      />
      <button type="submit" className="todo-button">Add Todo</button>
      <p className={!isValid ? 'err' :''} style={!isValid ? { display: "block" } : {display:'none'}}>Please Enter the task....!</p>
    </form>
  );
}
