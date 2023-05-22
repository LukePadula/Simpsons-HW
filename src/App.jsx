import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";

class App extends Component {
  state = { likedCount: 0 };

  setLikedCount = (liked) => {
    this.setState({
      likedCount:
        !liked && this.state.likedCount > 0
          ? this.state.likedCount - 1
          : this.state.likedCount + 1,
    });
  };

  onDelete = (index) => {
    const simpsonsCopy = [...this.state.simpsons];
    simpsonsCopy.splice(index, 1);
    this.setState({ simpsons: simpsonsCopy });
  };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=5`
    );
    this.setState({ simpsons: data });
  }

  render() {
    const { simpsons } = this.state;

    if (!simpsons) return <Loading />;

    return (
      <>
        <h1>Total no of liked chars {this.state.likedCount}</h1>
        <Simpsons
          setLikedCount={this.setLikedCount}
          onDelete={this.onDelete}
          simpsons={simpsons}
        />
      </>
    );
  }
}

export default App;
