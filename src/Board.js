import React from "react";
import Square from "./Square";
import "./index.css";

class Board extends React.Component {
  renderSquare(id) {
    return (
      <Square
        value={this.props.squares[id]}
        onClick={() => this.props.onClick(id)}
      />
    );
  }

  render() {
    return (
      <div className="rows">
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
