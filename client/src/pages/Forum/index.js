import React, { Component } from "react";
import "./forum.css";
import API from "../../utils/API";
import Banner from "../../components/Banner";
import SortBar from "../../components/SortBar";
import { Container, Row, Col } from "reactstrap";

class Forum extends Component {
  state = {
    key: "value"
  };

  componentDidMount() { }

  handleSortBtn = e => {
    const sortby = e.target.value;
    console.log("Sort Clicked\n", sortby);
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Banner backgroundImage="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
          Welcome to the Space Forum
        </Banner>
        <SortBar
          sortOne="top"
          sortTwo="popular"
          handleSortBtn={this.handleSortBtn}
        />
        <Container fluid className="forum-container">
          <Row className="forum-row">
            <Col md="3" xs="12" className="info-column">Info (About)</Col>
            <Col md="9" xs="12" className="posts-column">Posts</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Forum;
