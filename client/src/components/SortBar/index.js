import React from "react";
import { Link } from "react-router-dom";
import "./sortbar.css";

const SortBar = props => (
  <nav className="navbar navbar-expand-lg sortbar dropdown">
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

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span style={{ color: "White" }}>
        <i className="fas fa-map" />
      </span>
    </button>

    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div className="navbar-nav">
        <Link
          className={
            window.location.pathname === "/Data"
              ? "nav-item nav-link active"
              : "nav-item nav-link"
          }
          to={`/${props.pageOne}`}
        >
          {props.pageOne}
        </Link>

        <Link
          className={
            window.location.pathname === "/Forum"
              ? "nav-item nav-link active"
              : "nav-item nav-link"
          }
          to={`/${props.pageTwo}`}
        >
          {props.pageTwo}
        </Link>

        <Link
          className={
            window.location.pathname === "/Profile"
              ? "nav-item nav-link active"
              : "nav-item nav-link"
          }
          to={`/${props.pageThree}`}
        >
          {props.pageThree}
        </Link>
      </div>
    </div>
  </nav>
);

export default SortBar;
