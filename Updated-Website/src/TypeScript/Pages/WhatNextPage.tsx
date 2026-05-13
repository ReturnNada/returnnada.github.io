import { Container, Row, Col, Card } from "react-bootstrap";

import "../../App.css";
import NavigationBar from "../NavBar";

function WhatNextPage() {
  return (
    <div
      className="cardAnim"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ebeff5",
      }}
    >
      <NavigationBar />
      <h1 className="pageTitle">What's Next?</h1>
      <Container style={{ paddingTop: 30, paddingBottom: 50 }}>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="shadow-sm">
              <Card.Body className="p-4">
                <Card.Title style={{ fontSize: "24px" }}>
                  Plans on the horizon
                </Card.Title>
                <hr />
                <Card.Text className="projectText mb-0">
                  In the future, I would like to pursue opportunities in quantum
                  computing, whether it be research opportunities under
                  professors or professional work experience. Currently, I want
                  to continue creating things that implement custom PCB design
                  and coding, with some potential projects being a Vinyl Record
                  Player, a functioning Spartan Laser replica (non-lethal,
                  trust me), and a lamp with a dual-function as a projector.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer style={{ paddingBottom: 50, textAlign: "center" }}>
        <p>&copy; All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default WhatNextPage;
