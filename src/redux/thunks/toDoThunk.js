import { createToDoAction, loadToDosAction } from "../actions/actionCreator";

export const loadToDosThunk = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://todoredux-api-alvaro-cabero.herokuapp.com/todos"
    );
    const toDos = await response.json();
    dispatch(loadToDosAction(toDos));
  };
};

export const createToDoThunk = (toDo) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://todoredux-api-alvaro-cabero.herokuapp.com/todos",
      {
        method: "POST",
        body: JSON.stringify(toDo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const toDoData = await response.json();
    dispatch(createToDoAction(toDoData));
  };
};

export const deleteToDoThunk = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://todoredux-api-alvaro-cabero.herokuapp.com/todos",
      {
        method: "DELETE",
      }
    );
    await response.json();
    if (response.ok) {
      dispatch(deleteToDoAction(id));
    }
  };
};
// {
// export const editArticlesThink = (id) =>
// async=(dispatch)=>{
// 	await fetch (`${urlAPI}${id}`);
// {method:"DELETE";
// }
// 	const articles= await response.json()
// 	dispatch(loadArticlesAction(articles);

//  export const create artcilethink =(arcitle =>> async (dispatch)=>{
// 	const response =await
// }

// export const loadCurrentArticleThunk=(id)=> async (dispatch)=>{
// 	const response=await fetch(urlapi(id));
// 	const article = await response.json();
// dispatch(loadCurrentArticleAction(article));

// export const upadateArticleThunk=(article)=> async (dispatch)=>{
// 	const response=await fetch(urlapi(article.id));
// {methods:"PUT",
// headers:{
// 	content-Type": "application/json",}
// 	body:JSON:stringify
// 	const upadetedarticle = await response.json();
// dispatch(loadCurrentArticleAction(upadtedarticle));
