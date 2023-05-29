import React, { Component } from "react";
import { connect } from "react-redux";
import { ONDELETE } from "../store/types";

class Delete extends Component {
  onDelete = () => {
    this.props.dispatch({ type: ONDELETE, id: this.props.id });
  };

  render() {
    return (
      <div>
        <button onClick={this.onDelete}>Delete</button>
      </div>
    );
  }
}

export default connect()(Delete);
