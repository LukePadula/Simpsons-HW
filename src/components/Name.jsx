import React, { Component } from "react";

class Name extends Component {
  render() {
    const { liked, character, onLikeToggle } = this.props;
    return (
      <div>
        <h1>{character}</h1>
        <button onClick={() => onLikeToggle(this.props.id)}>
          {liked ? "Liked" : "Not liked"}
        </button>
      </div>
    );
  }
}

export default Name;
