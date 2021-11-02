import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  createToDoThunk,
  deleteToDoThunk,
  loadToDosThunk,
} from "../thunks/toDoThunk";

const useToDos = () => {
  const toDos = useSelector((store) => store.toDos);

  const dispatch = useDispatch();

  const loadToDos = useCallback(() => {
    dispatch(loadToDosThunk());
  }, [dispatch]);

  const createToDo = useCallback(() => {
    dispatch(createToDoThunk());
  }, [dispatch]);

  const deleteToDo = useCallback(() => {
    dispatch(deleteToDoThunk());
  }, [dispatch]);

  return {
    toDos,
    loadToDos,
    createToDo,
    deleteToDo,
  };
};

export default useToDos;

// const useToDos =()=>{
// 	const {articles, currentArticle } = useSelector(({articles, currentArticles})
//  => {articles, currentArticles});

// 	const dispatch = useDispatch();

// 	const loadToDos =()=>{
// 		dispatch(loadToDosThunk())
// 	},[dispatch]);

// 	const deleteArticles =(id)=>{
// 	dispatch(deleteArticlesThunk(id));
// 	}[dispatch]

// 	const createArticle=(article)=>{
// 	dispatch(createArticleThunk(article));
// 	}[dispatch]

// 	const loadCurrentArticle =(useCallback{(id)=>{
// 		dispatch(loadArticlesThunk())
// 	},[dispatch]);

// 	const loadCurrentArticle =(useCallback{(article)=>{
// 		dispatch(updateArticleThunk())
// 	},[dispatch]);

// 	return{
// 		articles,
// 		currentArticle
// 		loadArticles
// 		deleteArticles
// 	}
// }
