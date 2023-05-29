import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import Controls from "./components/Controls";
import "./App.css";
import { connect } from "react-redux";
import { SETDATA } from "./store/types";

class App extends Component {
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=20`
      );
      data.forEach((element, index) => {
        element.id = index + Math.random();
      });
      this.props.dispatch({ type: SETDATA, data });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { simpsons } = this.props;
    if (!simpsons) return <Loading />;
    let likeTotal = 0;

    simpsons.forEach((character) => {
      if (character.liked) likeTotal++;
    });

    return (
      <>
        <h1>Total no of liked chars {likeTotal}</h1>
        <Controls />
        <Simpsons />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    simpsons: state.simpsons,
  };
}

export default connect(mapStateToProps)(App);
