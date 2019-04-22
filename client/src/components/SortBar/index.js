import React from "react";
import "./sortbar.css";

const SortBar = props => (
  <div className="sortbar dropdown">
    <button
      className="sort-btn btn dropdown-toggle"
      type="button"
      id="drop-sort"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Sort
    </button>

    <div className="sort-menu dropdown-menu" aria-labelledby="drop-sort">
      <button
        className="dropdown-item drop-item"
        type="button"
        value={props.sortOne}
        onClick={props.handleSortBtn}
      >
        {props.sortOne}
      </button>
      <button
        className="dropdown-item drop-item"
        type="button"
        value={props.sortTwo}
        onClick={props.handleSortBtn}
      >
        {props.sortTwo}
      </button>
    </div>
  </div>
);

export default SortBar;
