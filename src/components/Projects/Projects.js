import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pawstore from "../../Assets/Projects/pawstore.png";
import uber from "../../Assets/Projects/uber-clone.jpeg";
import mcpServer from "../../Assets/Projects/mcp-server.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uber}
              isBlog={false}
              title="Uber Clone (React+ TypeScript + Stripe+ NeonDB)"
              description="Developed a full-featured Uber-like ride-booking app using React and TypeScript with seamless frontend-user experience. Integrated Stripe API for secure and real-time payment processing. Used Neon Database for scalable and reliable backend data management. Built with Next.js for performance and server-side rendering. Implemented Google Maps API for route tracking and booking interface."
              ghLink="https://github.com/DarshiniLokesh/uber-clone" 
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pawstore}
              isBlog={false}
              title="PawStore – Online Dog Accessories Store"
              description="Developed a complete frontend website for a dog products store using React and SCSS. Focused on intuitive UX/UI design, clean layout, and responsiveness across devices. Implemented dynamic product rendering and reusable components."
              ghLink="https://github.com/DarshiniLokesh/pawstore-frontend"
              demoLink="pawstore-frontend.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mcpServer}
              isBlog={false}
              title="MCP Server (Python)"
              description="Developed an MCP server in Python capable of running and handling commands. Designed for reliability and extensibility, allowing for easy integration and command processing."
              ghLink="https://github.com/DarshiniLokesh/MCP-weather"
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
