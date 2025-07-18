import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <img
          src="https://ghchart.rshah.org/DarshiniLokesh"
          alt="DarshiniLokesh's Github chart"
          style={{ maxWidth: '100%', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        />
      </div>
    </Row>
  );
}

export default Github;
