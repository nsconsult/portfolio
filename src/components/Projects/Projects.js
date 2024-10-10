import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
//import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          quelques uns des mes projets sur lesquels j'ai travaillé recemment
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portfolio"
              description="Portfolio personnel decrivant mes realisations dans le domaine du developpement web"
              technologie="React Js"
              ghLink="https://github.com/nsconsult/portfolio"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My Rotten Tomatoes"
              description="Il s'agit d'une plateforme web de streaming , où les utilisateurs peuvent s'inscrire, s'authentifier,regarder, commenter, noter et même mettre leur film préféré en favori."
              technologie=" Nest Js, Nuxt Js, MongoDb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Show Time"
              description="Show Time est une plateforme web de reservation de billets pour des concerts prevues."
              technologie="Nest Js et MongoDb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MiaFlix"
              description="Miaflix est une application web proposant aux cynéphiles de previsualiser des films en fonctions de leur categories de préference, et aller suivre sur les plateforme de stream légales"
              demoLink="https://miaflix.netlify.app/"
              technologie="Nest Js, MongoDb et nuxtJs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Todo Web App"
              description="C'est une application de gestion des taches ou les utilisateurs peuvent creer, lire, mettre a jour et supprimer des taches."
              demoLink="https://naztodo.netlify.app/"
              technologie="Vue Js et localStorage"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
