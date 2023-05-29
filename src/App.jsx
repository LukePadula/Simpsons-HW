import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import Controls from "./components/Controls";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  state = { searchInput: "" };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=20`
      );
      data.forEach((element, index) => {
        element.id = Math.random();
      });
      this.props.dispatch({ type: "SET-DATA", data });

      console.log(this.props);

      // this.setState({ simpsons: data });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { simpsons } = this.props;

    const { searchInput, sortDirection, sortBy } = this.state;
    if (!simpsons) return <Loading />;
    let simpsonsResults = simpsons;

    if (searchInput) {
      simpsonsResults = simpsons.filter((item) => {
        if (
          item.quote.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.character.toLowerCase().includes(searchInput.toLowerCase())
        )
          return item;
      });
    }
    if (this.props.sortDirection === "asc") {
      simpsonsResults.sort((a, b) => {
        if (a[this.props.sortBy] < b[this.props.sortBy]) {
          return -1;
        }
        if (a[this.props.sortBy] > b[this.props.sortBy]) {
          return 1;
        }
      });
    } else if (this.props.sortDirection === "desc") {
      simpsonsResults.sort((a, b) => {
        if (a[this.props.sortBy] < b[this.props.sortBy]) {
          return 1;
        }
        if (a[this.props.sortBy] > b[this.props.sortBy]) {
          return -1;
        }
      });
    }

    let likeTotal = 0;

    simpsons.forEach((character) => {
      if (character.liked) likeTotal++;
    });

    return (
      <>
        <h1>Total no of liked chars {likeTotal}</h1>
        <Controls
          onReset={this.onReset}
          onSort={this.onSort}
          onSearchInput={this.onSearchInput}
          sortDirection={sortDirection}
          sortBy={sortBy}
          searchInput={searchInput}
        />
        <Simpsons onDelete={this.onDelete} onLikeToggle={this.onLikeToggle} />
      </>
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

export default connect(mapStateToProps)(App);
