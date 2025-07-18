import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumeImg from "../../Assets/resume.png";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Darshini-Lokesh.pdf";

function ResumeNew() {
  return (
    <Container fluid className="resume-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: 'rgba(30, 20, 50, 0.95)' }}>
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative", width: '100%' }}>
        <Col md={8} style={{ textAlign: 'center', margin: '2rem 0' }}>
          <h1 style={{ color: '#c770f0', fontWeight: 700, marginBottom: '1.5rem' }}>My Resume</h1>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            download="DarshiniLokesh.pdf"
            style={{ maxWidth: "250px", marginBottom: '2rem', fontWeight: 600, fontSize: '1.2em' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          <div style={{ display: 'flex', justifyContent: 'center', background: '#18122B', borderRadius: '18px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', padding: '2rem', margin: '0 auto' }}>
            <img src={resumeImg} alt="Resume" style={{ width: '100%', maxWidth: '700px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;
