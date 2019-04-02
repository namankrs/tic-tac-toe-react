import React from "react";
import Square from "./Square";
import "./index.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { squares: Array(9).fill(null), xIsNext: true };
  }

  handleClick(id) {
    const squares = this.state.squares.slice();
    if (this.hasWon(squares) || !(squares[id] == null)) return;
    squares[id] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }

  renderSquare(id) {
    return (
      <Square
        value={this.state.squares[id]}
        onClick={() => this.handleClick(id)}
      />
    );
  }

  hasWon(squares) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    let status = `Next Player:${this.state.xIsNext ? "X" : "O"}`;
    const winner = this.hasWon(this.state.squares);
    if (winner) status = `${winner} has won the game`;
    return (
      <div className="rows">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
