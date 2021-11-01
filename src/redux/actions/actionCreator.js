import actionTypes from "./actionTypes";

export const loadToDosAction = (toDo) => ({
  type: actionTypes.loadToDos,
  toDos: toDos,
});
