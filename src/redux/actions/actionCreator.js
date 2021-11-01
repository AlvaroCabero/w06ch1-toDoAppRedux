import actionTypes from "./actionTypes";

export const loadToDosAction = (toDos) => ({
  type: actionTypes.loadToDos,
  toDos: toDos,
});
