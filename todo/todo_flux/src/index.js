import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoStore from './flux_things/stores/TodoStore'
import * as TodoActions from "./flux_things/actions/TodoActions.js"
class Todoapp extends React.Component{
  componentWillMount(){
    TodoStore.on("change",()=>{
      this.setState({
        todo_items:TodoStore.getAll()
      })
    });
  }
  componentWillUnmount(){
    TodoStore.removeListerner("change",()=>{
      this.setState({
        todo_items:TodoStore.getAll()
      })
    });
  }
  render(){
    
    return(
      <TodoBox/>
    );
  }
  
}
class TodoBox extends React.Component{
  constructor(props){
    super(props);
    this.state={editing:false,todo_items:TodoStore.getAll(),todo_checkbox:Array().fill(false)};
    this.edting_mode=this.edting_mode.bind(this);
    this.gettingoutof_editing_mode=this.gettingoutof_editing_mode.bind(this);
  }
  handleClickOnCheckBox(v){
    TodoActions.deleteTodo(v);
  }
  edting_mode(){
      this.setState({editing:true});
  }
  gettingoutof_editing_mode(i){
    TodoActions.creatTodo(i);
    this.setState({editing:false});
  }
  render(){
    if(this.state.editing==false){
      return(
        <div>
          <Enter editing_mode={this.edting_mode}/>
          <div>
            {
              this.state.todo_items.map((v)=>{return <h3><input type="checkbox" onClick={this.handleClickOnCheckBox.bind(this,v)}/>{v}</h3>})
            }
          </div>
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
  handleClickOnNewButton(){
    TodoActions.creatTodo('i am amritya');
  }
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
    var name='ami';
    return (
    <div>
      <textarea id="the_todo_value" defalutValue="enter the todo item"></textarea>
      <div>
        <button className="button-primary" onClick={()=>this.props.gettingoutof_editing_mode(document.getElementById('the_todo_value').value)}>Return</button>
      </div>
    </div>
    );
  }
}
ReactDOM.render(<Todoapp />,document.getElementById('root'));