import actionTypes from "../actions/actionTypes";

const toDosReducer = (toDos = [], action) => {
  //le pasamos ahora el estado inicial en vez de en el context, porque redux lo llamara una vez antes que nada
  let newToDos = toDos;
  switch (action.type) {
    case actionTypes.loadToDos:
      newToDos = [...action.toDos];
      break;
    default:
      break;
  }

  return newToDos;
};

export default toDosReducer;
