import React, { Component } from "react";

class Delete extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onDelete(this.props.index)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Delete;
