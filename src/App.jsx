import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import Controls from "./components/Controls";
import "./App.css";

class App extends Component {
  state = { sortDirection: "asc", sortBy: "quote", searchInput: "" };

  onLikeToggle = (id) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
    });
    const simpsons = [...this.state.simpsons];
    simpsons[indexOf].liked = !simpsons[indexOf].liked;
    this.setState({ simpsons });
  };

  onDelete = (id) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
    });
    const simpsons = [...this.state.simpsons];
    simpsons.splice(indexOf, 1);
    this.setState({ simpsons });
  };

  onSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  onReset = (e) => {
    this.setState({ sortDirection: "asc", sortBy: "quote", searchInput: "" });
  };

  onSort = (e) => {
    if (e.target.id === "sort-by") {
      this.setState({ sortBy: e.target.value });
    } else {
      this.setState({ sortDirection: e.target.value });
    }
    console.log(e);
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=20`
      );
      data.forEach((element, index) => {
        element.id = Math.random();
      });
      this.setState({ simpsons: data });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { simpsons, searchInput, sortDirection, sortBy } = this.state;
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
    if (sortDirection === "asc") {
      simpsonsResults.sort((a, b) => {
        console.log(a);
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
      });
    } else if (sortDirection === "desc") {
      simpsonsResults.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return 1;
        }
        if (a[sortBy] > b[sortBy]) {
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
        <Simpsons
          onDelete={this.onDelete}
          simpsons={simpsonsResults}
          onLikeToggle={this.onLikeToggle}
        />
      </>
    );
  }
}

export default App;
