import { Container, Row, Col, Card } from "react-bootstrap";

import NavigationBar from "../NavBar";
import "../../App.css";
import Turntable from "../../assets/Turntable.png";

function TurntablePage() {
  return (
    <div
      className="cardAnim"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ebeff5",
      }}
    >
      <NavigationBar />
      <h1 className="pageTitle">Turntable</h1>
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
                  src={Turntable}
                  style={{
                    maxHeight: "55vh",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <Card.Body className="p-4">
                <Card.Text className="projectText mb-0">
                  I value music very highly in my life, so much so that I
                  decorate my room with the vinyls from my favorite
                  artists/albums. The problem? I didn't have anything to play
                  them on. Using Altium Designer and Solidworks, I'm designing
                  and building a vinyl turntable from scratch, with the end goal
                  of open-sourcing the project and having a cheap alternative to
                  the over-priced options currently on the market.
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

export default TurntablePage;
