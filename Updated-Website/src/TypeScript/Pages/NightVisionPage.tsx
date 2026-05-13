import { Container, Row, Col, Card, Carousel, CarouselItem } from "react-bootstrap";

import NavigationBar from "../NavBar";
import "../../App.css";
import NV1 from "../../assets/NV1.jpg";
import NV2 from "../../assets/NV2.jpg";
import NightVision from "../../assets/Night_Vision.jpg";

const imgStyle: React.CSSProperties = {
  height: "55vh",
  width: "100%",
  objectFit: "contain",
  backgroundColor: "#f8f9fc",
};

function NightVisionPage() {
  return (
    <div
      className="cardAnim"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ebeff5",
      }}
    >
      <NavigationBar />
      <h1 className="pageTitle">Night Vision</h1>
      <Container style={{ paddingTop: 30, paddingBottom: 50 }}>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="shadow-sm">
              <Carousel slide interval={null} variant="dark">
                <CarouselItem>
                  <img src={NV2} className="d-block" style={imgStyle} />
                </CarouselItem>
                <CarouselItem>
                  <img src={NV1} className="d-block" style={imgStyle} />
                </CarouselItem>
                <CarouselItem>
                  <img src={NightVision} className="d-block" style={imgStyle} />
                </CarouselItem>
              </Carousel>
              <Card.Body className="p-4">
                <Card.Text className="projectText mb-0">
                  I got tired of needing to use a flashlight to see in the dark,
                  so I decided to build a pair of Night Vision goggles using a
                  Raspberry Pi Zero W, an IR camera, an LCD display, and a
                  trusty hard hat. Uses Python scripting.
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

export default NightVisionPage;
