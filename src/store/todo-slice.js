import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    { id: Math.random(), title: "todo1", completed: false },
    { id: Math.random(), title: "todo2", completed: false },
    { id: Math.random(), title: "todo3", completed: false },
  ],
  count: 3,
  text: "",
  selected: false,
  edit: undefined,
};
const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addText: (state, action) => {
      state.text = action.payload;
    },
    addTodo(state, action) {
      const newTodo = {
        id: Math.random(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      console.log(state.todos.at(-1).id);

      state.count++;
      state.text = "";
    },
    toggleComplete: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].completed = action.payload.completed;
    },
    removeTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((task) => task.id !== id);
      state.count--;
    },
    addEditedTodo: (state, action) => {
      const { id, title } = action.payload;
      const editedTask = state.todos.find((task) => task.id === id);
      editedTask.title = title;
      state.selected = false;
      state.text = "";
    },
    editTodo: (state, action) => {
      console.log(action.payload);
      const titleToEdit = state.todos.find(
        (task) => task.id === action.payload
      );
      state.text = titleToEdit.title;
      state.selected = true;
      state.edit = action.payload;
    },
    cancelEdit: (state) => {
      state.selected = false;
      state.text = "";
    },
  },
});
export const todoActions = todoSlice.actions;
export default todoSlice;
