import { Container, Row, Col, Card, Carousel, CarouselItem } from "react-bootstrap";

import NavigationBar from "../NavBar";
import "../../App.css";
import Soldering from "../../assets/Soldering.jpg";
import HitboxDemo from "../../assets/HitboxDemo.mp4";
import Hitbox from "../../assets/Hitbox.jpg";

const mediaStyle: React.CSSProperties = {
  height: "55vh",
  width: "100%",
  objectFit: "contain",
  backgroundColor: "#f8f9fc",
};

function HitboxPage() {
  return (
    <div
      className="cardAnim"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ebeff5",
      }}
    >
      <NavigationBar />
      <h1 className="pageTitle">HitBox</h1>
      <Container style={{ paddingTop: 30, paddingBottom: 50 }}>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="shadow-sm">
              <Carousel slide interval={null} variant="dark">
                <CarouselItem>
                  <img src={Soldering} className="d-block" style={mediaStyle} />
                </CarouselItem>
                <CarouselItem>
                  <img src={Hitbox} className="d-block" style={mediaStyle} />
                </CarouselItem>
                <CarouselItem>
                  <video src={HitboxDemo} className="d-block" controls style={mediaStyle} />
                </CarouselItem>
              </Carousel>
              <Card.Body className="p-4">
                <Card.Text className="projectText mb-0">
                  Some players in the fighting game community prefer to compete
                  with controllers following a box format, so I decided to make
                  a custom one of my own to see if I liked it. Using a Raspberry
                  Pi Pico, the leftover cardboard packaging of a CASIO
                  calculator, a plastic container, 20 keycaps, tape, failed
                  solders, and prayers, this device is cross-compatible with the
                  Nintendo Switch and Computers for Smash Ultimate and Melee,
                  respectively.
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

export default HitboxPage;
