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
                  their talent pool for recruiting us into their annual
                  "E-Week" competition. It followed a similar format to VEX
                  competitions, except for the fact that VEX competitions don't
                  take place on the campus of a high-security aerospace company
                  sponsored by the US Government. I was the lead programmer and
                  did most of the wiring for our competition robot, which was
                  able to handle simple tasks like motor driving and lifting
                  with logic from an Arduino Uno. The spaghetti wiring,
                  alligator-clip method of plugging in the lipo battery, and
                  flashy shades ensured that if our robot went down, it would
                  be in style (it didn't).
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
