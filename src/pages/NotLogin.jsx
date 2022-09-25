import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NotLogin() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height:"80vh"}} >
      <Row className="">
        <Col>
          <h1 className="text-danger notadmin">U Must Login</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NotLogin;
