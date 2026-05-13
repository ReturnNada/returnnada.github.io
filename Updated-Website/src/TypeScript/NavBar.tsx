import { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Modal,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqenokeo";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const NavigationBar = () => {
  const [showContact, setShowContact] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const closeModal = () => {
    setShowContact(false);
    setTimeout(() => setStatus("idle"), 300);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar
        bg="light"
        fixed="top"
        expand="lg"
        style={{
          zIndex: "1000",
        }}
      >
        <Container>
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="hover-zoom"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <hr />
              <Nav.Link className="hover-zoom" href="/website/">
                Home
              </Nav.Link>
              <Nav.Link className="hover-zoom" href="/website/Projects/">
                Projects
              </Nav.Link>
              <Nav.Link className="hover-zoom" href="/website/About/">
                About
              </Nav.Link>
              <Nav.Link
                className="hover-zoom"
                onClick={() => setShowContact(true)}
                style={{ cursor: "pointer" }}
              >
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showContact} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {status === "success" ? (
            <div className="text-center py-4">
              <h5>Thanks for reaching out!</h5>
              <p className="mb-0">
                Your message has been sent. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  rows={5}
                  placeholder="Your message"
                  required
                />
              </Form.Group>
              {status === "error" && (
                <p className="text-danger small mb-3">
                  Something went wrong. Please try again, or email
                  armaitus@gmail.com directly.
                </p>
              )}
              <div className="d-flex justify-content-end">
                <Button
                  variant="outline-secondary"
                  onClick={closeModal}
                  className="me-2"
                  disabled={status === "sending"}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="dark"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Sending...
                    </>
                  ) : (
                    "Send"
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavigationBar;
