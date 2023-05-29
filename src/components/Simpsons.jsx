import React, { Component } from "react";
import Character from "./Character";
import { connect } from "react-redux";
import Loading from "./Loading";

class Simpsons extends Component {
  render() {
    const {
      simpsons,
      onLikeToggle,
      onDelete,
      sortBy,
      sortDirection,
      searchInput,
    } = this.props;

    let simpsonsFinal;

    if (searchInput) {
      simpsonsFinal = simpsons.filter((item) => {
        if (
          item.quote.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.character.toLowerCase().includes(searchInput.toLowerCase())
        )
          return item;
      });
    } else {
      simpsonsFinal = simpsons;
    }

    simpsonsFinal.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
    });
    if (sortDirection === "desc") {
      simpsonsFinal.reverse();
    }

    return (
      <>
        {simpsonsFinal.map((item, index) => {
          return (
            <Character
              onLikeToggle={onLikeToggle}
              onDelete={onDelete}
              item={item}
              key={index + item.quote + item.character}
              id={item.id}
            />
          );
        })}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    simpsons: state.simpsons,
    sortDirection: state.sortDirection,
    sortBy: state.sortBy,
    searchInput: state.searchInput,
  };
}

export default connect(mapStateToProps)(Simpsons);
