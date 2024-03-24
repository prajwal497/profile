import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/img-home.webp";
import homeLogo2 from "../Assets/img-home3.png";
import Particle from "./Particle";
import Typewriter from "typewriter-effect";
// import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Prajwal Pathak</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Software Developer",
                      "MERN Stack Developer"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={7} className="home-about-description">
              <h1 style={{ fontSize: "2.6em", padding: 50, textAlign: "left" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p style={{ padding: 50 }} className="home-about-body">
                I love coding and even if it is a part of job, i still find myself quite fond of it.
                <br />
                <br />I have experience hands-on coding on and with
                <i>
                  <b className="purple"> Javascript, Nodejs, Express.js, Feathersjs, SQL and NoSQL like MongoDB. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b> and
                  also in areas related to{" "}
                  <b className="purple">
                    Blockchain.
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with <b className="purple">Node.js</b>
                &nbsp;, and frameworks like
                <b className="purple"> Express.js</b>,<b className="purple"> Feathers.js</b> and
                <i>
                  <b className="purple"> React.js</b>
                </i>
              </p>
            </Col>
            <Col md={5} style={{ paddingLeft: 50 }} className="myAvtar">
              <img src={homeLogo2} className="img-fluid" alt="avatar" />

              {/* <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt> */}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
