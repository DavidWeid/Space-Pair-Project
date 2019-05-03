import React from "react";
import "./postcard.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const PicPostCard = props => {
  let initialComment;

  if (!props.userComment) {
    initialComment = "";
  } else {
    initialComment = `${props.username}: ${props.userComment}`;
  }

  return (
    <div className="post-block pic-post">
      <div className="card">
        <img src={props.img} className="card-img-top" alt={props.type} />
        <Container fluid className="card-body">
          <Row>
            <Col>
              <p className="card-text initial-comment">{initialComment}</p>
            </Col>
          </Row>

          <Row className="info-row">
            <Col xs="12" sm="3">
              <p className="date-stamp">{props.time}</p>
            </Col>
            <Col xs="12" sm="9" className="d-flex justify-content-end">
              <button
                onClick={props.handlePostBtns}
                className="post-btn like-btn"
                id={props.id}
                value="like"
              >
                Like
              </button>
              <Link
                to={`/Posts/${props.id}`}
                className="post-btn comment-btn"
                id={props.id}
                value="comment"
              >
                Comment
              </Link>
              <button
                onClick={props.handlePostBtns}
                className="post-btn save-btn"
                id={props.id}
                value="save"
              >
                Save
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PicPostCard;
