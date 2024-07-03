import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">AYUSH KUMAR VERMA </span>
            from <span className="purple"> Patna, India.</span>
            <br />I am a junior pursuing B.Tech in Electronics and Communication Engineering
            (ECE) in NIT Patna
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do Whatever it takes!"{" "}
          </p>
          <footer className="blockquote-footer">Ayush Kumar Verma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
