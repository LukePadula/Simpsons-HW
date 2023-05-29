import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";
import { connect } from "react-redux";
import Loading from "./Loading";

class Character extends Component {
  render() {
    const { character, quote, image, id, liked } = this.props.item;

    return (
      <div className="characterContainer">
        <Name
          character={character}
          onLikeToggle={this.props.onLikeToggle}
          id={id}
          liked={liked}
        />
        <Quote quote={quote} />
        <Image image={image} />
        <Delete
          quote={quote}
          character={character}
          onDelete={this.props.onDelete}
          id={this.props.id}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sortDirection: state.sortDirection,
    sortBy: state.sortBy,
    searchInput: state.searchInput,
    test: state.test,
    simpsons: state.simpsons,
  };
}

export default connect(mapStateToProps)(Character);
