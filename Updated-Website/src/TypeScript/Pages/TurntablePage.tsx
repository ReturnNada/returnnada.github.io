import {
  Container,
  Row,
  Col,
  Card,
  Carousel,
  CarouselItem,
} from "react-bootstrap";

import NavigationBar from "../NavBar";
import "../../App.css";
import Turntable from "../../assets/Turntable.png";
import Headpiece from "../../assets/Headpiece.png";
import PreampSchem from "../../assets/PreampSchem.png";
import Arch from "../../assets/Arch.png";
import Screen from "../../assets/screen.mp4";

const mediaStyle: React.CSSProperties = {
  height: "55vh",
  width: "100%",
  objectFit: "contain",
  backgroundColor: "#f8f9fc",
  justifySelf: "center",
};

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
              <Carousel slide interval={null} variant="light">
                <CarouselItem>
                  <img src={Turntable} className="d-block" style={mediaStyle} />
                </CarouselItem>
                <CarouselItem>
                  <video
                    src={Screen}
                    className="d-block"
                    controls
                    style={mediaStyle}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={PreampSchem}
                    className="d-block"
                    style={mediaStyle}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img src={Headpiece} className="d-block" style={mediaStyle} />
                </CarouselItem>
                <CarouselItem>
                  <img src={Arch} className="d-block" style={mediaStyle} />
                </CarouselItem>
              </Carousel>
              <Card.Body className="p-4">
                <Card.Text className="projectText mb-0">
                  Using KiCad and FreeCAD, I'm designing and building a vinyl
                  turntable from scratch, with the end goal of open-sourcing the
                  project and having a cheap alternative to the over-priced
                  options currently on the market.
                </Card.Text>
                <br />
                <Card.Text className="projectText mb-0">
                  The master design document can be found{" "}
                  <a
                    href="https://docs.google.com/document/d/1j-58GDzDCVaWSR_J0Ogk-JqnUxKhin-PMXa7JtUu8O4/edit?usp=sharing"
                    className="projectText mb-0"
                  >
                    here
                  </a>
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
