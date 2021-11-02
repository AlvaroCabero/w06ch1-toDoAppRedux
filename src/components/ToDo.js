import { ListGroup } from "react-bootstrap";
// import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const ToDo = (toDo) => {
  return (
    <>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action href="#link1">
          {toDo.todo.name}
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          {toDo.todo.description}
        </ListGroup.Item>
        <ListGroup.Item action variant="warning">
          Delete
        </ListGroup.Item>
      </ListGroup>
    </>
    // <Container>
    //   <Row className="justify-content-md-center">
    //     <Col md="auto">To Do: {toDo.todo.name}</Col>
    //   </Row>
    //   <Row>
    //     <Col md="auto">Description: {toDo.todo.description}</Col>
    //   </Row>
    //   <Button variant="warning">Warning</Button>{" "}
    // </Container>
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
