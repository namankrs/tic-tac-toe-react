import React from "react";
import "./index.css";

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        style={{ color: this.props.value == "X" ? "blue" : "green" }}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
