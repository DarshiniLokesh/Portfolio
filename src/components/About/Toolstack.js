import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiVercel,
  SiMacos,
  SiGithub,
} from "react-icons/si";
import { FaMousePointer } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
  <SiGithub />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiPostman />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiVercel />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiStripe />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiMongodb />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiPostgresql /> {/* NeonDB is Postgres-based */}
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiVisualstudiocode />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiSass /> {/* for SCSS */}
</Col>
<Col xs={4} md={2} className="tech-icons">
  <FaNodeJs />
</Col>

    </Row>
  );
}

export default Toolstack;
