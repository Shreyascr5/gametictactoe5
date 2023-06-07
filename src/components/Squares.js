import React from "react";
import Buttons from "./Buttons";

export default function Squares(){
    const[xIsNext, setXIsNext]=React.useState(true);
    const[squares,setSquares]=React.useState(Array(9).fill(null));
    function handleClick(i) {
        if(squares[i] || calculateWinner(Squares)){
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i]="X";
        }else{
            nextSquares[i]="O";
        }
        setSquares(nextSquares);
        setXIsNext(! xIsNext);
      }
      const winner = calculateWinner(squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
      }
    return(
        
        <div className="container">
        <h1>TicTacToe</h1>
        <div className="status">{status}</div>
        <div className="board-row"></div>
        
        <div className="square-row">
        <Buttons value={squares[0]} onSquareClick={()=>
        handleClick(0)}/>
        <Buttons value={squares[1]} onSquareClick={()=>
        handleClick(1)}/>
        <Buttons value={squares[2]} onSquareClick={()=>
        handleClick(2)} />
       
        </div>
        <div className="square-row">
        <Buttons value={squares[3]} onSquareClick={()=>
        handleClick(3)}/>
        <Buttons value={squares[4]} onSquareClick={()=>
        handleClick(4)} />
        <Buttons value={squares[5]} onSquareClick={()=>
        handleClick(5)}/>
        </div>
        <div className="square-row">
        <Buttons value={squares[6]} onSquareClick={()=>
        handleClick(6)}/>
        <Buttons value={squares[7]} onSquareClick={()=>
        handleClick(7)}/>
        <Buttons value={squares[8]} onSquareClick={()=>
        handleClick(8)}/>
        
        </div>
        </div>
    );
}
function calculateWinner(Squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (Squares[a] && Squares[a] === Squares[b] && Squares[a] === Squares[c]) {
          return Squares[a];
        }
      }
      return null;
    }
