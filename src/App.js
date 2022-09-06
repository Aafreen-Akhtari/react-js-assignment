import { Fragment } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
function App() {
  return (
    <Fragment>
      <section id="goal-form">
        <TodoInput />
      </section>
      <section id="goals">
        <TodoList />
      </section>
    </Fragment>
  );
}

export default App;
