import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

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

export default Character;
