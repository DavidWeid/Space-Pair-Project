import React from "react";
import { Container, Row, Col } from "reactstrap";
import { TextArea, FormBtn } from "../Form";

const PicCommentCard = props => {
  return (
    <div>
      <div className="card">
        <img src={props.img} className="card-img-top" alt={process.type} />
        <Container fluid className="card-body">
          <Row className="info-row">
            <Col xs="12" sm="4">
              <p className="date-stamp">Posted: {props.time}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="card-text initial-comment">
                {props.username}: {props.userComment}
              </p>
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
                <FormBtn onClick={props.handleFormSubmit}>Submit</FormBtn>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PicCommentCard;
