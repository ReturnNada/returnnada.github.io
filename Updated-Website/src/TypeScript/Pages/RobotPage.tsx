import { Container, Row, Col, Card } from "react-bootstrap";

import NavigationBar from "../NavBar";
import "../../App.css";
import Robot1 from "../../assets/Robot1.jpg";

function RobotPage() {
  return (
    <div
      className="cardAnim"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ebeff5",
      }}
    >
      <NavigationBar />
      <h1 className="pageTitle">Robot</h1>
      <Container style={{ paddingTop: 30, paddingBottom: 50 }}>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="shadow-sm">
              <div
                style={{
                  backgroundColor: "#f8f9fc",
                  padding: "20px",
                  textAlign: "center",
                  borderTopLeftRadius: "0.375rem",
                  borderTopRightRadius: "0.375rem",
                }}
              >
                <img
                  src={Robot1}
                  style={{
                    maxHeight: "55vh",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <Card.Body className="p-4">
                <Card.Text className="projectText mb-0">
                  In my high school engineering class, Lockheed Martin would use
                  their talent pool for recruiting us into their annual "E-Week"
                  competition, which followed a similar format to VEX
                  competitions. I was the lead programmer and did all of the
                  wiring for our competition robot, which was able to handle
                  simple tasks like motor driving and lifting with logic from an
                  Arduino Uno.
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

export default RobotPage;
