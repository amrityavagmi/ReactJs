import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component{
constructor(props){
  super(props);
  this.state={editing:false,todo_items:Array(),todo_removing_checkbox:Array().fill(false)};
  this.save = this.save.bind(this);
  this.edit = this.edit.bind(this);
  this.remove=this.remove.bind(this);
  this.handlecheckbox=this.handlecheckbox.bind(this);
}
save(){
  var val=this.refs.todo_input.value;
  var already_exists=false;
  for(var i=0;i<this.state.todo_items.length&&!already_exists;i++)
  {
    if(this.state.todo_items[i]==val)
    {
      already_exists=true;
    }
  }
  if(already_exists)
    alert('You have already added this task to to-do list');
  else
    this.state.todo_items.push(val);
  this.setState({editing:false});
  
}
edit()
{
  this.setState({editing:true});
}
handlecheckbox(v)
{
  for(var i=0;i<this.state.todo_items.length;i++)
  {
    if(this.state.todo_items[i]==v)
      this.state.todo_removing_checkbox[i]=true;
  }
  this.setState({todo_removing_checkbox:this.state.todo_removing_checkbox});
}
remove()
{
  alert('Warning:\n You are going to delete some of the todo-items');
  for(var i=0;i<this.state.todo_removing_checkbox.length;i++)
  {
    if(this.state.todo_removing_checkbox[i]==true)
    {
      delete this.state.todo_items[i];
      delete this.state.todo_removing_checkbox[i];
    }
    this.setState({todo_item:this.state.todo_items,todo_removing_checkbox:this.state.todo_removing_checkbox});
  }
}
render_editingmode(){
  return (
    <div>
      <textarea ref="todo_input" defalutValue="enter the todo item"></textarea>
      <button className="button-primary" onClick={this.save}>save</button>
      
    </div>
    );
}
render_front(){
  return (
    <div>
      <button className="button-primary" onClick={this.edit}>Add todo items</button>
      {
        this.state.todo_items.map((v)=>{return(<h3> <input type="checkbox" onClick={this.handlecheckbox.bind(this,v)}/> {v}</h3>)})
      }
      <button className="button-primary" onClick={this.remove}>Delete todo items</button>
    </div>
  );
}
render() {
  
  if(this.state.editing)
    return this.render_editingmode();
 else
   return this.render_front();
}
}
ReactDOM.render(<Square />,document.getElementById('root'));



