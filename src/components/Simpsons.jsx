import React, { Component } from "react";
import Character from "./Character";

class Simpsons extends Component {
  render() {
    const { simpsons } = this.props;
    console.log(this.props);

    return (
      <>
        {simpsons.map((item, index) => {
          return (
            <Character
              setLikedCount={this.props.setLikedCount}
              onDelete={this.props.onDelete}
              item={item}
              key={item.quote}
              index={index}
            />
          );
        })}
      </>
    );
  }
}

export default Simpsons;
