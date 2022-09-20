export const addText = (text) => {
  return {
    type: "ADD_TEXT",
    payload: {
      text: text,
    },
  };
};
export const addTodo = (title) => {
  return {
    type: "ADD_TODO",
    payload: {
      title: title,
    },
  };
};
export const toggleComplete = (id) => {
  return {
    type: "TOGGLE_COMPLETE",
    payload: id,
  };
};
export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    payload: id,
  };
};
export const addEditedTodo = (id, title) => {
  console.log(title);
  return {
    type: "ADD_EDITED_TODO",
    payload: {
      id: id,
      title: title,
    },
  };
};
export const editTodo = (id) => {
  return {
    type: "EDIT_TODO",
    payload: id,
  };
};
export const cancelEdit = () => {
  return {
    type: "CANCL_EDIT",
  };
};
export const deleteCompletedTasks = () => {
  return {
    type: "DELETE_COMPLETED_TASKS",
  };
};
