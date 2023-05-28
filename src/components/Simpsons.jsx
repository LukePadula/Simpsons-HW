import React, { Component } from "react";
import Character from "./Character";

class Simpsons extends Component {
  render() {
    const { simpsons, onLikeToggle, onDelete } = this.props;

    return (
      <>
        {simpsons.map((item) => {
          return (
            <Character
              setLikedCount={this.props.setLikedCount}
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

export default Simpsons;
