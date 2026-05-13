import "@google/model-viewer";
import { Container, Row, Col, Card } from "react-bootstrap";

import NavigationBar from "../NavBar";
import "../../App.css";
import MSXV_CB_Breakout_Rev_1 from "../../MSXV_CB_Breakout_Rev_1/MSXV_CB_Breakout_Rev_1.glb";
import PCB_AntiSparkV3 from "../../PCB_AntiSparkV3/PCB_AntiSparkV3.glb";
import PCB_Battery_Tester from "../../PCB_Battery_Tester/PCB_Battery_Tester.glb";

interface PCB {
  title: string;
  description: string;
  model: string;
}

const pcbs: PCB[] = [
  {
    title: "Breakout Board",
    description:
      "Allows for another board hosting an STM32 to interface with other electronic components, in a fashion similar to the Arduino boards. This ensures the team knows that the other board would interface properly in the final design.",
    model: MSXV_CB_Breakout_Rev_1,
  },
  {
    title: "AntiSpark",
    description:
      "Prevents sparking when plugging in a battery, which is necessary due to the 10s6p design we chose for it. Set a new safety standard for operation.",
    model: PCB_AntiSparkV3,
  },
  {
    title: "Battery Tester",
    description:
      "Set a new voltage testing standard for the batteries used in the car's alternate power source. Prevents faulty batteries from being erroneously used.",
    model: PCB_Battery_Tester,
  },
];

const CircuitPage: React.FC = () => {
  return (
    <div
      className="cardAnim"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ebeff5",
      }}
    >
      <NavigationBar />
      <h1 className="pageTitle">Circuits</h1>
      <p className="projectText pageSubtitle">
        Click and drag any board to inspect it in 3D.
      </p>
      <Container style={{ paddingTop: 20, paddingBottom: 50 }}>
        <Row xs={1} md={2} lg={3} className="g-4">
          {pcbs.map((pcb) => (
            <Col key={pcb.title}>
              <Card className="shadow-sm h-100">
                <model-viewer
                  src={pcb.model}
                  alt={`3D model of ${pcb.title}`}
                  camera-controls
                  auto-rotate
                  style={{
                    width: "100%",
                    height: "280px",
                    backgroundColor: "#f8f9fc",
                    borderTopLeftRadius: "0.375rem",
                    borderTopRightRadius: "0.375rem",
                  }}
                ></model-viewer>
                <Card.Body className="p-4">
                  <Card.Title>{pcb.title}</Card.Title>
                  <hr />
                  <Card.Text className="projectText">
                    {pcb.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <footer style={{ paddingBottom: 50, textAlign: "center" }}>
        <p>&copy; All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default CircuitPage;
