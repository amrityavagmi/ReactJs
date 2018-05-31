//initial state 

export const todoInitialState={
  editing:false,
  todo_items:Array(),
}

export const TodoReducer=(state=todoInitialState,action)=>{
  if(action.type=="ADD_TODO"){
    state={...state,editing:false,todo_items:state.todo_items.concat(action.payload)};
  }
  else if(action.type=="REMOVE_TODO"){
    state={
      ...state,
      todo_items:state.todo_items.filter((v)=>{return (v!=action.payload);})/*(()=>{
      var todo_items_new=[];
      for(let i=0;i<this.state.todo_items.length;i++){
        if(this.state.todo_items[i]!=action.payload)
          todo_items_new.push(this.state.todo_items[i]);
      }
      return todo_items_new;
    }
  )*/
  };
  }
  if(action.type=="CHANGE_MODE"){
    state={...state,editing:true};
  }
  return state;
}
