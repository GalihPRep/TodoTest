import TODOS from "./data";

const appReducer = (state = TODOS, action) => {
  const todos = [...state];
  switch (action.type) {
    case "CREATE_TODO_SAGA":
      todos.push(action.payload);
      return todos;
    case "DELETE_TODO_SAGA":
      const hasId = (n) => n.id === action.payload;
      while (todos.some(hasId)) todos.splice(todos.findIndex(hasId), 1);
      return todos;
    case "UPDATE_TODO_SAGA":
      let index = -1;
      for (let i = 0; i < todos.length; i++) {
        index++;
        if (todos[i].id === action.payload.id) break;
      }
      if (index !== -1) todos[index] = action.payload;
      return todos;
    default:
      return todos;
  }
};

export default appReducer;
