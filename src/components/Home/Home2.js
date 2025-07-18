import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../../Assets/avatar.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered my love for programming through building real-world projects that solve problems and improve user experiences.
              <br />
              <br />I am fluent in:
              <i>
                <b className="purple"> Java, JavaScript, TypeScript, and Python. </b>
              </i>
              <br />
              <br />
              My interests lie in developing scalable and elegant{" "}
              <i>
                <b className="purple">Full-Stack Web Applications</b>, with a strong focus on{" "}
                <b className="purple">UI/UX design</b> and responsiveness.
              </i>
              <br />
              <br />
              I love working with <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> modern JavaScript libraries and frameworks</b>
              </i>{" "}
              like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>, integrating APIs and crafting clean, interactive user interfaces.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DarshiniLokesh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/darshini-lokesh-373832260/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
