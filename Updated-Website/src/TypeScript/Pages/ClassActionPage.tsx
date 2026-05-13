import { Container, Row, Col, Card, Carousel, CarouselItem, Button } from "react-bootstrap";

import NavigationBar from "../NavBar";
import "../../App.css";
import CASS5 from "../../assets/CASS5.png";
import CASS6 from "../../assets/CASS6.png";
import CASS7 from "../../assets/CASS7.png";
import CASS8 from "../../assets/CASS8.png";

const imgStyle: React.CSSProperties = {
  height: "55vh",
  width: "100%",
  objectFit: "contain",
  backgroundColor: "#f8f9fc",
};

function ClassActionPage() {
  return (
    <div
      className="cardAnim"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ebeff5",
      }}
    >
      <NavigationBar />
      <h1 className="pageTitle">Class Action</h1>
      <Container style={{ paddingTop: 30, paddingBottom: 50 }}>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="shadow-sm">
              <Carousel slide interval={null} variant="dark">
                <CarouselItem>
                  <img src={CASS8} className="d-block" style={imgStyle} />
                </CarouselItem>
                <CarouselItem>
                  <img src={CASS7} className="d-block" style={imgStyle} />
                </CarouselItem>
                <CarouselItem>
                  <img src={CASS6} className="d-block" style={imgStyle} />
                </CarouselItem>
                <CarouselItem>
                  <img src={CASS5} className="d-block" style={imgStyle} />
                </CarouselItem>
              </Carousel>
              <Card.Body className="p-4">
                <Card.Text className="projectText">
                  Published under Azimuth Entertainment, a game development
                  company established in 2009, Class Action is a turn-based
                  class fighter based on the likes of "Worms" and "Territory
                  War" with local multiplayer being the focus. I wrote 13 major
                  C# logic scripts (accounts for movement, hitbox/hurtbox
                  detection, spawning objects, etc), created 3 unique characters
                  complete with movesets and animations, made 5 background
                  assets and designed 9 scenes, including maps and selection
                  menus.
                </Card.Text>
                <div className="text-center mt-4">
                  <Button
                    variant="dark"
                    href="https://returnnada.itch.io/class-action"
                    target="_blank"
                    rel="noreferrer"
                    className="hover-zoom"
                  >
                    View on itch.io
                  </Button>
                </div>
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

export default ClassActionPage;
