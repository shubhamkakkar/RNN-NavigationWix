import { combineReducers, createStore } from "redux";

import todoReducer from "./reducer/todoReducer/todoReducer";

const rootReducer = combineReducers({
  todo: todoReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
