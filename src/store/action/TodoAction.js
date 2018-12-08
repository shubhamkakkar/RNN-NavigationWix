import { ADD_TODO_ACTION, REMOVE_TODO_ACTION } from "./actionConstants";

export const addTodo = (todo, key) => {
  console.log("in add todo-action", todo, key);

  return {
    type: ADD_TODO_ACTION,
    todoObj: {
      todo,
      key
    }
  };
};

export const removeTodo = key => {
  console.log("in remove todo-action", key);
  return {
    type: REMOVE_TODO_ACTION,
    todoObj: {
      key
    }
  };
};
