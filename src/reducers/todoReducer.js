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

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TEXT":
      return {
        ...state,
        text: action.payload.text,
      };

    case "ADD_TODO":
      const newTodo = {
        id: Math.random(),
        title: action.payload.title,
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        count: state.count + 1,
        text: "",
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((task) => task.id !== action.payload),
        count: state.count - 1,
      };

    case "TOGGLE_COMPLETE":
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      });

      return {
        ...state,
        todos: newTodos,
      };
    case "EDIT_TODO":
      const titleToEdit = state.todos.find(
        (task) => task.id === action.payload
      );
      return {
        ...state,
        text: titleToEdit.title,
        selected: true,
        edit: action.payload,
      };
    case "ADD_EDITED_TODO":
      const { id, title } = action.payload;
      const newEditedTodos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
          return todo;
        }
        return todo;
      });

      return {
        ...state,
        todos: newEditedTodos,
        selected: false,
        text: "",
      };

    case "CANCL_EDIT":
      return {
        ...state,
        text: "",
        selected: false,
      };

    case "DELETE_COMPLETED_TASKS":
      const completedTasks = state.todos.filter(
        (task) => task.completed !== true
      );
      let num = completedTasks.length;
      return {
        ...state,
        todos: completedTasks,
        count: num,
        selected: false,
        text:""
      };
    default:
      return state;
  }
};
export default todoReducers;
