import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techskills";
// import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolskills";
import Card from "react-bootstrap/Card";
import { FaPersonSwimming } from "react-icons/fa6";
import { SiPcgamingwiki } from "react-icons/si";
import { CgGym } from "react-icons/cg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "left" }}>
                    Hi Everyone, I am <span className="purple">Prajwal Pathak </span>
                    from <span className="purple"> Gujarat, India.</span>
                    <br />
                    I am currently employed as a software developer at Neurapses Technologies.
                    <br />
                    I have completed B-tech in CSE at PU, Vadodara.
                    <br />
                    <br />
                    Apart from coding, some other activities that I love to do!
                  </p>
                  <ul>
                    <li className="about-activity">
                      <SiPcgamingwiki /> Gaming
                    </li>
                    <li className="about-activity">
                      <FaPersonSwimming /> Swimming
                    </li>
                    <li className="about-activity">
                      <CgGym /> Working out
                    </li>
                  </ul>

                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
