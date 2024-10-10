import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut, je suis <span className="purple">Nazim ALI </span>
            J'habite a <span className="purple"> Lomé, au Togo.</span>
            <br />
            Actuellement étudiant en fin parcours en
            <br />
            Licence Genie Logiciel a <span className="purple">Lucas University College </span>
            <br />
            <br />
            A part le code je me perd aussi dans la
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Lecture
            </li>
            <li className="about-activity">
              <ImPointRight /> La musique
            </li>
            <li className="about-activity">
              <ImPointRight /> Le voyage
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "M'efforce de construire des choses qui font la différence !"{" "}
          </p>
          <footer className="blockquote-footer">Nazim</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
