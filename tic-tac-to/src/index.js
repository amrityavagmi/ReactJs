import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component{

	render(){
		return (
			<button className="square" onClick={this.props.onClicker}>{this.props.value}</button>
		);
	}
}
class Board extends React.Component{
	/*constructor(props){
		super(props);
		this.state={squares:Array(9).fill(null),next_player:'X'};
		this.handleClick=this.handleClick.bind(this);
	}*/
	check_winner(){
		const lines = [
	    [0, 1, 2],
	    [3, 4, 5],
	    [6, 7, 8],
	    [0, 3, 6],
	    [1, 4, 7],
	    [2, 5, 8],
	    [0, 4, 8],
	    [2, 4, 6],
	  ];
	  const squares=this.props.squares;
	  for(let i=0;i<lines.length;i++){
	  	const [a,b,c]=lines[i];
	  	if(squares[a]==squares[b]&&squares[b]==squares[c]&&squares[a])
	  		return squares[a];
	  }
	  return null;

	}
	
	square_render(i){
		return <Square value={this.props.squares[i]} onClicker={()=>this.props.handleClicker(i)}/>;
	}

	render(){
		const winner=this.check_winner();
		let status;
		if(winner){
			status=winner +" has won the match";
		}
		else{
			status=this.props.next_player + "'s turn";
		}

		return(
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.square_render(0)}
					{this.square_render(1)}
					{this.square_render(2)}
				</div>
				<div className="board-row">
					{this.square_render(3)}
					{this.square_render(4)}
					{this.square_render(5)}
				</div>
				<div className="board-row">
					{this.square_render(6)}
					{this.square_render(7)}
					{this.square_render(8)}
				</div>
			</div>
		);
	}


}

class Game extends React.Component{
	constructor(props){
		super(props);
		this.state=({history:[{squares:Array(9).fill(null)}],next_player:'X'});
		this.handleClick=this.handleClick.bind(this);
	}
	handleClick(i){
		const history = this.state.history;
	    const current = history[history.length - 1];
	    const squares = current.squares.slice();
	    squares[i]=this.state.next_player;
	    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
		next_player:(this.state.next_player=='X'?'O':'X')});
	}
	render(){
		const history=this.state.history;
		const current=history[history.length-1];
		return (
			<Board squares={current.squares} next_player={this.state.next_player} handleClicker={(i)=>this.handleClick(i)}/>
		);
		
	}
}
ReactDOM.render(<Game />,document.getElementById('root'));



