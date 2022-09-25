import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NotAdmin() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height:"80vh"}} >
      <Row className="">
        <Col>
          <h1 className="text-danger notadmin">ONLY ADMIN</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NotAdmin;
