import React, { Component } from "react";
import { connect } from "react-redux";
import { LIKETOGGLE } from "../store/types";

class Name extends Component {
  onLikeToggle = (id) => {
    this.props.dispatch({ type: LIKETOGGLE, id: id });
  };

  render() {
    const { liked, character } = this.props;
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
