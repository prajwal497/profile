import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiSolidity,
  SiExpress,
  SiMysql,
  SiNestjs,
  SiTypescript
} from "react-icons/si";
import { FaFeatherAlt } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>Node Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>React Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>Solidity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>Express Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFeatherAlt /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>Feathersjs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>NestJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>TypeScript</p>
      </Col>
    </Row >
  );
}

export default Techstack;
