import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hi Everyone, I am <span className="purple">Darshini Lokesh</span> from
      <span className="purple"> Chennai, India.</span>
      <br />
      I am currently pursuing my B.E. in Computer Science and Engineering at Sathyabama Institute of Science and Technology.
      <br />
      I’m passionate about full-stack web development, clean UI/UX design, and building applications that solve real-world problems.
      <br />
      <br />
      Apart from coding, here are a few things that I genuinely enjoy:
    </p>
    <ul>
      <li className="about-activity">
        <ImPointRight /> Professional Dancing
      </li>
      <li className="about-activity">
        <ImPointRight /> Exploring New Places & Cultures
      </li>
      <li className="about-activity">
        <ImPointRight /> Designing Aesthetic and User-Friendly Interfaces
      </li>
    </ul>

    <p style={{ color: "rgb(155 126 172)" }}>
      "Strive to build things that make a difference!"
    </p>
    <footer className="blockquote-footer">Darshini Lokesh</footer>
  </blockquote>
</Card.Body>

    </Card>
  );
}

export default AboutCard;
