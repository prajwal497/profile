import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiStudio3T,
  SiAzuredevops
} from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsMicrosoftTeams /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>Teams</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStudio3T /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>Studio 3T</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscGithub /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops /> <p style={{ color: '#c889e6a2', fontSize: 20, 'text-align': 'center' }}>Azure</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
