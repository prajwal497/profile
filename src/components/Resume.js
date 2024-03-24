import React from 'react';
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdf from "../Assets/Resume.pdf";

const Resume = () => {
    return (
        <div>
            <Container fluid className="resume-section">
                <Row className="resume">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                height: '1700px',
                                width: '1319px',
                            }}
                        >
                            <Viewer fileUrl={pdf} className="d-flex justify-content-center" />
                        </div>
                    </Worker>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download Resume
                    </Button>
                </Row>
            </Container>
        </div>
    );
};

export default Resume