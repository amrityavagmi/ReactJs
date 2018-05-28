import {EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher"
class TodoStore extends EventEmitter{
	constructor(props){
		super(props);
		this.todos=[
			'Go Shopping','Pay Bills'
		];
	}
	creatTodos(text){
		this.todos.push(text);
		this.emit("change");
	}
	deleteTodos(text){
		for(let i=0;i<this.todos.length;i++){
			if(this.todos[i]==text)
				delete this.todos[i];
		}
		this.emit("change");
	}
	getAll(){
		return this.todos;
	}
	handleActions(action){
		if(action.type=="CREATE_TODO")
			this.creatTodos(action.text);
		else if(action.type=="DELETE_TODO")
			this.deleteTodos(action.text);
	}
}
const todostore=new TodoStore;
dispatcher.register(todostore.handleActions.bind(todostore));
window.dispatcher=dispatcher;
export default todostore;