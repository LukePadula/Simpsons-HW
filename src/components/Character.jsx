import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  state = { like: false };

  onLikeToggle = () => {
    console.log(this.state.like);
    this.setState({ like: !this.state.like }, () => {
      this.props.setLikedCount(this.state.like);
    });
  };

  render() {
    const { character, quote, image } = this.props.item;
    const { like } = this.state;

    return (
      <div className="characterContainer">
        <Name
          character={character}
          like={like}
          onLikeToggle={this.onLikeToggle}
        />
        <Quote quote={quote} />
        <Image image={image} like={like} />
        <Delete index={this.props.index} onDelete={this.props.onDelete} />
      </div>
    );
  }
}

export default Character;
