import { Fragment } from "react";
import "./App.css";
import TodoInput from "./component/TodoInput/TodoInput";
import TodoList from "./component/TodoList/TodoList";
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
