import { createStore } from "redux";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "SET_DONE":
      const item = state.find((todo) => todo.id === action.payload);
      return [
        { ...item, done: true },
        ...state.filter((todo) => todo.id !== action.payload),
      ];
    case "RESET_TODOS":
      return [];
    case "DELETE_TODO":
      return {
        ...state,
        todo: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(todosReducer);
export default store;
