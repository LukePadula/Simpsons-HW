import React, { Component } from "react";
import { connect } from "react-redux";

class Name extends Component {
  onLikeToggle = (id) => {
    this.props.dispatch({ type: "LIKE-TOGGLE", id: id });
  };

  render() {
    const { liked, character } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>{character}</h1>
        <button onClick={() => this.onLikeToggle(this.props.id)}>
          {liked ? "Liked" : "Not liked"}
        </button>
      </div>
    );
  }
}

export default connect()(Name);
