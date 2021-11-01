import{combineReducers} from redux

const rootReducer=combineReducers({
toDos:toDosReducer,
// currentToDo: currentToDoReducer,
});

export default rootReducer;