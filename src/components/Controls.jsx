import React, { Component } from "react";
import { connect } from "react-redux";

class Controls extends Component {
  onSort = (e) => {
    this.props.dispatch({ type: "ONSORT", event: e });
  };
  onReset = () => {
    this.props.dispatch({ type: "RESET" });
  };
  onSearch = (e) => {
    this.props.dispatch({ type: "ONSEARCH", event: e });
  };

  render() {
    const { onSearchInput, onSort, sortDirection, sortBy, searchInput } =
      this.props;
    return (
      <div id="controls-input">
        <input value={searchInput} onChange={this.onSearch}></input>
        <select
          value={sortDirection}
          onChange={this.onSort}
          id="sort-direction"
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
        <select value={sortBy} onChange={this.onSort} id="sort-by">
          <option value="quote">Quote</option>
          <option value="character">Character name</option>
        </select>
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sortDirection: state.sortDirection,
    sortBy: state.sortBy,
    searchInput: state.searchInput,
  };
}

export default connect(mapStateToProps)(Controls);
