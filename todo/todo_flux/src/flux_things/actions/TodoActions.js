import dispatcher from "../dispatcher/dispatcher.js"
export function creatTodo(text){
	dispatcher.dispatch(
	{
		type:"CREATE_TODO",
		text
	}
	);
}
export function deleteTodo(text){
	dispatcher.dispatch({
		type:"DELETE_TODO",
		text
	});
}