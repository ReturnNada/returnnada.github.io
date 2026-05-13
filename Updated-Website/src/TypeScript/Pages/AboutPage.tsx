import {
  Container,
  Row,
  Col,
  Card,
  Carousel,
  CarouselItem,
} from "react-bootstrap";
import NavigationBar from "../NavBar";
import CQ24 from "../../assets/CQ24.jpg";
import outsideWaterloo from "../../assets/outsideWaterloo.jpg";

import "../../App.css";

function AboutPage() {
  return (
    <div
      className="openAnim"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ebeff5",
      }}
    >
      <NavigationBar />
      <h1 className="pageTitle">About</h1>
      <Container style={{ paddingTop: 30, paddingBottom: 30 }}>
        <Row className="g-4 align-items-center">
          <Col md={6}>
            <Carousel slide interval={5000} variant="dark">
              <CarouselItem>
                <img
                  src={outsideWaterloo}
                  className="d-block w-100"
                  style={{
                    height: "55vh",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={CQ24}
                  className="d-block w-100"
                  style={{
                    height: "55vh",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </CarouselItem>
            </Carousel>
          </Col>
          <Col md={6}>
            <Card className="cardAnim shadow-sm">
              <Card.Body className="p-4">
                <Card.Title style={{ fontSize: "28px" }}>
                  Hi, I'm Lucas
                </Card.Title>
                <hr />
                <Card.Text className="projectText">
                  A Floridian Candidate for a Bachelor of Applied Science in
                  Computer Engineering at the University of Waterloo. Wanting
                  to get involved with projects that were hardware-based, I
                  participated in two design teams, and experimented with
                  different microcontrollers, giving me ample experience in the
                  circuit manufacturing and implementation processes (you can
                  read more about these experiences in the "Projects" page).
                </Card.Text>
                <Card.Text className="projectText">
                  In the future, I'd like to get involved in the field of
                  Quantum Computing, specifically with the hardware
                  implementation methods of qubit logic. Feel free to contact
                  me using the Dashboard above!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer
        style={{
          paddingBottom: 50,
          textAlign: "center",
        }}
      >
        <p>&copy; All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default AboutPage;
