export const mapStateToProps=(state)=>{
	return ({
    TodoReducer:state.TodoReducer
    /*GetInitialState:state.GetInitialState,
    AddTodoReducer:state.AddTodoReducer,
    RemoveTodoReducer:state.RemoveTodoReducer,
    GoToEditingModeReducer:state.GoToEditingModeReducer*/
	});
};
export const mapDispatchToProps=(dispatch)=>{
  return ({
    add_todo_item:(todo1)=>{
      dispatch({
        type:"ADD_TODO",
        payload:todo1
      });
    },
    change_window:()=>{
      dispatch({
        type:"CHANGE_MODE",
        payload:1
      });
    },
    remove_todo_items:(todo1)=>{
      dispatch({
        type:"REMOVE_TODO",
        payload:todo1
      });
    }
  }
  );
}