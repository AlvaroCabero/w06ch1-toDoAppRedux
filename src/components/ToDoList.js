const ToDoList =()=>{
const {toDos, loadToDos} = useToDos();
	//useSelector((store) => store.articles)// ({articles} => articles);
	//const dispatch = useDispatch (); 
//llamas al dispatch desde el provider a traves del useDispatch

//useEffect(()=>{
//	dispatch(loadArticlesThunk());	
//},[dispatch]);


useEffect(()=>{
loadToDos();	
},[loadToDos]);


return(

		<ul>
			{articles.map((toDo)=>{
				<Article key={toDo.id} name={toDo.name} quantity={toDo.quantity}/>
		</ul>

);
}

export default ToDoList;