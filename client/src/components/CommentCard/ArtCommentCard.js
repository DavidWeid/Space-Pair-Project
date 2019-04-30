import React from "react";
import { Container, Row, Col } from "reactstrap";

const ArtCommentCard = props => {
  return (
    <div>
      <div className="card">
        <img src={props.img} className="card-img-top" alt={process.type} />
      </div>
    </div>
  );
};

export default ArtCommentCard;