import ToDo from "./ToDo";
import { useEffect } from "react";

const ToDoList = () => {
  const { toDos, loadToDos } = useToDos();
  //useSelector((store) => store.articles)// ({articles} => articles);
  //const dispatch = useDispatch ();
  //llamas al dispatch desde el provider a traves del useDispatch

  //useEffect(()=>{
  //	dispatch(loadArticlesThunk());
  //},[dispatch]);

  useEffect(() => {
    loadToDos();
  }, [loadToDos]);

  return (
    <ul>
      {toDos.map((toDo) => {
        <ToDo key={toDo.id} name={toDo.name} />;
      })}
    </ul>
  );
};

export default ToDoList;
