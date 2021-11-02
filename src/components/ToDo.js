import { Col, Container, Row } from "react-bootstrap";
import React from "react";

const ToDo = (toDo) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">To Do: {toDo.name}</Col>
      </Row>
      <Row>
        <Col md="auto">Description: {toDo.description}</Col>
      </Row>
    </Container>
    // <>
    //   <div className="card">
    //     <img src="..." className="card-img-top" alt="..." />
    //     <div className="card-body">
    //       <h5 className="card-title">{toDo.name}</h5>
    //       <p className="card-text">Description</p>
    //     </div>
    //     <ul className="list-group list-group-flush">
    //       <li className="list-group-item">{toDo.description}</li>
    //     </ul>

    //   </div>
    // </>
  );
};

export default ToDo;
