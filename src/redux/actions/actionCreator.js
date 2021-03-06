import actionTypes from "./actionTypes";

export const loadToDosAction = (toDos) => ({
  type: actionTypes.loadToDos,
  toDos: toDos,
});

export const createToDoAction = (toDo) => ({
  type: actionTypes.createToDo,
  toDo: toDo,
});

export const deleteToDoAction = (id) => ({
  type: actionTypes.deleteToDo,
  id: id,
});
