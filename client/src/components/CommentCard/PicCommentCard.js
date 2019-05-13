import React from "react";
import { Container, Row, Col } from "reactstrap";
import { TextArea, FormBtn } from "../Form";

const PicCommentCard = props => {
  console.log(props.comments);

  let initialComment;

  if (!props.userComment) {
    initialComment = "";
  } else {
    initialComment = `${props.username}: ${props.userComment}`;
  }

  const displayComments = props.comments.map(comment => {

    let commentBtns;

    if (props.userID !== comment.userID) {
      commentBtns = "";
    } else {
      commentBtns = (
        <div className="comment-btns-div">
          <button id={comment._id} value="edit" onClick={props.handleCommentBtns}>
            Edit
          </button>
          <button id={comment._id} value="delete" onClick={props.handleCommentBtns}>
            Delete
          </button>
        </div>
      );
    }

    return (
      <div key={comment._id} className="comment-row">
        <p>
          {comment.username}: {comment.message}
        </p>
        {commentBtns}
      </div>
    );
  });

  return (
    <div>
      <div className="card">
        <img src={props.img} className="card-img-top" alt={props.type} />
        <Container fluid className="card-body">
          <Row className="info-row">
            <Col xs="12" sm="8">
              <p className="date-stamp">Posted: {props.time}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="card-text initial-comment">{initialComment}</p>
              {displayComments}
            </Col>
          </Row>
          <Row className="form-row">
            <Col>
              <form>
                <TextArea
                  value={props.value}
                  onChange={props.handleInputChange}
                  name="comment"
                  placeholder="Your Thoughts"
                />
                <FormBtn onClick={props.handleFormSubmit}>Comment</FormBtn>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PicCommentCard;
