import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import blogmaniac from "../../Assets/Projects/blog.png";

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
              imgPath={blogmaniac}
              isBlog={false}
              title="SIGN LANGUAGE DETECTION"
              description="Enabled continuous model refinement through feedback integration, benefiting deaf and hearing-impaired users."
              ghLink="https://github.com/iayush0verma12/HandSignDetection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="TWITTER SENTIMENT ANALYSIS MODEL"
              description="Python Web Scrapping project for Twitter Sentiment Analysis."
              ghLink="https://github.com/iayush0verma12/TwitterSentimentAnalysis."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="COVID VACCINATION APP"
              description="Buit a JAVA Based Covid Vaccination App where users and register themselves and select vaccine as per their choice and choose nearby vaccination centers."
              ghLink="https://github.com/iayush0verma12/VaccineApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Music App"
              description="Music listing app from which any audio files can be searched and listened fully functional created using android studio framework and java as the programming language"
              ghLink="https://github.com/iayush0verma12/music_Player"
            />
          </Col>

          <h2 style={{ fontWeight: "900", color: "white" }}>Team-Project</h2>

          // <Col md={4} className="project-card">
          //   <ProjectCard
          //     imgPath={suicide}
          //     isBlog={false}
          //     title="French Teaching App"
          //     description="French Teaching Application, user can learn french word and listen to it's pronunciation"
          //     ghLink="https://github.com/iayush0verma12/frenchTeacherApp"
          //   />
          // </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Land Lord Managing Website"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/gdscnitp/charges-by-tenant-landlord"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
