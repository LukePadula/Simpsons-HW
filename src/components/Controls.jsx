import React, { Component } from "react";
import { connect } from "react-redux";
import { ONSORT, ONSEARCH, RESET } from "../store/types";
<store></store>;

class Controls extends Component {
  onSort = (e) => {
    this.props.dispatch({ type: ONSORT, event: e });
  };
  onReset = () => {
    this.props.dispatch({ type: RESET });
  };
  onSearch = (e) => {
    this.props.dispatch({ type: ONSEARCH, value: e.target.value });
  };

  render() {
    const { sortDirection, sortBy, searchInput, resetDisabled } = this.props;
    return (
      <div id="controls-input">
        <input value={searchInput} onChange={this.onSearch}></input>
        <select value={sortDirection} onChange={this.onSort} id="sortDirection">
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
        <select value={sortBy} onChange={this.onSort} id="sortBy">
          <option value="quote">Quote</option>
          <option value="character">Character name</option>
        </select>
        <button disabled={resetDisabled} onClick={this.onReset}>
          Reset
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sortDirection: state.sortDirection,
    sortBy: state.sortBy,
    searchInput: state.searchInput,
    resetDisabled: state.resetDisabled,
  };
}

export default connect(mapStateToProps)(Controls);
