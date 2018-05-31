import {connect} from "react-redux";
import React from 'react';
import {mapStateToProps,mapDispatchToProps} from '../Actions/actions'
import {todoInitialState} from "../reducers/reducers"
class TodoBox extends React.Component{
  constructor(props){
    super(props);
    //this.state={editing:false,todo_items:[]}
    console.log("checking",todoInitialState.editing);
    this.edting_mode=this.edting_mode.bind(this);
    this.gettingoutof_editing_mode=this.gettingoutof_editing_mode.bind(this);
    this.deleteTodoItems=this.deleteTodoItems.bind(this);
  }
  edting_mode(){
      //ßthis.setState({editing:true});
      this.props.change_window();
  }

  gettingoutof_editing_mode(i){
    this.props.add_todo_item(i);
    //this.state.todo_items.push(i);
    //this.setState({editing:false});
  }
  deleteTodoItems(v){
    this.props.remove_todo_items(v);
    /*for(let i=0;i<this.state.todo_items.length;i++){
      if(this.state.todo_items[i]==v){
          delete this.state.todo_items[i];
      }
    }
    this.setState(this.state);*/
  }
  render(){
      if(!this.props.TodoReducer.editing){
      return(
        <div>
          <Enter editing_mode={this.edting_mode}/>
          <div>
            {
              this.props.TodoReducer.todo_items.map((v)=>{return <h3><input type="checkbox" onClick={this.deleteTodoItems.bind(this,v)}/>{v}</h3>})
            }
          </div>
          <Remove />
        </div>
      );
    }
    else{
      return(
        <AddTodoItems gettingoutof_editing_mode={this.gettingoutof_editing_mode}/>
      );
    }
    
  }
}
class Enter extends React.Component{
  
  render(){
    return(
      <div>
        <button className="button-primary" onClick={this.props.editing_mode}>Enter</button>
      </div>
    );
  }
}
class Remove extends React.Component{
  render(){
    return(
      <div>
        <button className="button-primary" onClick={()=>alert('you clicked on remove button')}>Remove</button>
      </div>
    );
  }
}
class AddTodoItems extends React.Component{
  
  render(){
    return (
    <div>
      <textarea id="todo_add_item" placeholder="enter the todo item"></textarea>
      <div>
        <button className="button-primary" onClick={()=>this.props.gettingoutof_editing_mode(document.getElementById('todo_add_item').value)}>Return</button>
      </div>
    </div>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoBox);






