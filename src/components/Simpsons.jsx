import React, { Component } from "react";
import Character from "./Character";
import { connect } from "react-redux";

class Simpsons extends Component {
  render() {
    console.log(this.props, "simpsons");
    const { simpsons, onLikeToggle, onDelete } = this.props;

    return (
      <>
        {simpsons.map((item) => {
          return (
            <Character
              onLikeToggle={onLikeToggle}
              onDelete={onDelete}
              item={item}
              key={item.quote + item.character}
              id={item.id}
            />
          );
        })}
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "simpsonssub");
  return {
    simpsons: state.simpsons,
  };
}

export default connect(mapStateToProps)(Simpsons);
