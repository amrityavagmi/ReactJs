import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TodoBox extends React.Component{
  constructor(props){
    super(props);
    this.state={editing:false,todo_items:Array(),todo_checkbox:Array().fill(false)};
    this.edting_mode=this.edting_mode.bind(this);
    this.gettingoutof_editing_mode=this.gettingoutof_editing_mode.bind(this);
    this.deleteTodoItems=this.deleteTodoItems.bind(this);
  }
  edting_mode(){
      this.setState({editing:true});
  }
  gettingoutof_editing_mode(i){
    this.state.todo_items.push(i);
    this.setState({editing:false});
  }
  deleteTodoItems(v){
    for(let i=0;i<this.state.todo_items.length;i++){
      if(this.state.todo_items[i]==v){
          delete this.state.todo_items[i];
      }
    }
    this.setState(this.state);
  }
  render(){
    if(this.state.editing==false){
      return(
        <div>
          <Enter editing_mode={this.edting_mode}/>
          <div>
            {
              this.state.todo_items.map((v)=>{return <h3><input type="checkbox" onClick={this.deleteTodoItems.bind(this,v)}/>{v}</h3>})
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
  constructor(props){
    super(props);
    this.state={textInputValue:""};
    this.handleClickHere=this.handleClickHere.bind(this);
    this.handleSubmitHere=this.handleSubmitHere.bind(this);
  }
  handleClickHere(change){
    this.setState({textInputValue:change.target.value});
  }
  handleSubmitHere(change){
    this.props.gettingoutof_editing_mode(this.state.textInputValue);
  }
  render(){
    return (
      <div>
        <form  onSubmit={this.handleSubmitHere}>
          <input type="text" onChange={this.handleClickHere}/>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
ReactDOM.render(<TodoBox />,document.getElementById('root'));
