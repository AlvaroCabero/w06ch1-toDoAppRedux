import ToDo from "./ToDo";
import { useEffect } from "react";
import useToDos from "../redux/hooks/useToDos";
import { useDispatch } from "react-redux";
import { deleteToDoThunk } from "../redux/thunks/toDoThunk";

const ToDoList = () => {
  const { toDos, loadToDos } = useToDos();
  const dispatch = useDispatch();

  //useSelector((store) => store.articles)// ({articles} => articles);
  //const dispatch = useDispatch ();
  //llamas al dispatch desde el provider a traves del useDispatch

  //useEffect(()=>{
  //	dispatch(loadArticlesThunk());
  //},[dispatch]);
  const toDeleteToDo = (id) => {
    dispatch(deleteToDoThunk(id));
  };

  useEffect(() => {
    loadToDos();
  }, [loadToDos]);

  return (
    <ul>
      {toDos.map((toDo) => (
        <>
          <ToDo
            key={toDo.id}
            toDo={toDo}
            onDelete={() => toDeleteToDo(toDo.id)}
          />
        </>
      ))}
    </ul>
  );
};

export default ToDoList;
