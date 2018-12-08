import { ADD_TODO_ACTION, REMOVE_TODO_ACTION } from "../action/actionConstants";

const initialState = {
  todo: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION: {
      return {
        ...state,
        todo: state.todo.concat({
          key: action.todoObj.key,
          todo: action.todoObj.todo
        })
      };
    }
    case REMOVE_TODO_ACTION: {
      return {
        ...state
        // todo: state.todo
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
