import React from "react";
import { Container, Row, Col } from "reactstrap";

const PicCommentCard = props => {
  return (
    <div>
      <div className="card">
        <img src={props.img} className="card-img-top" alt={process.type} />
        <Container fluid className="card-body">
            <Row>
                <Col>
                    <p className="card-text initial-comment">
                        {props.username}: {props.userComment}
                    </p>
                </Col>
            </Row>
            <Row className="info-row">
                <Col xs="12" sm="4">
                    <p className="date-stamp">Posted: {props.time}</p>
                </Col>
                <Col xs="12" sm="8" className="d-flex justify-content-end">
                    <button className="post-btn comment-btn" id={props.id}>
                        Comment
                    </button>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  );
};

export default PicCommentCard;