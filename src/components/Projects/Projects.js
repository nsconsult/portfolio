import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import estate from "../../Assets/Projects/estate.png";
import bot from "../../Assets/Projects/bot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Quelques-uns des projets sur lesquels j'ai travaillé récemment.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="🎬 MiaFlix – Prévisualisation de films"
              description="Application pour cinéphiles avec système de tri par catégorie et redirection vers les plateformes légales de streaming."
              demoLink="https://miaflix.netlify.app/"
              githubLink="https://github.com/username/miaflix"
              technologie="NestJS, MongoDB, VueJS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="🖥️ Dashboard Admin – Bot 1xbet"
              description="Dashboard web complet pour superviser le bot Telegram : gestion des utilisateurs, suivi des transactions et statistiques en temps réel."
              demoLink="https://bot1xbet-s38x.onrender.com/"
              githubLink="https://github.com/username/dashboard-bot-1xbet"
              technologie="ReactJS, ExpressJS, MongoDB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bot}
              isBlog={false}
              title="🤖 Bot Telegram – Recharge & Retrait 1xbet"
              description="Bot Telegram pour permettre aux utilisateurs d’effectuer leurs recharges et retraits liés aux paris sportifs, avec une expérience fluide et sécurisée."
              demoLink="https://t.me/rechargeiabot"
              githubLink="https://github.com/username/bot-1xbet"
              technologie="NestJS, Telegram API, MongoDB"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estate}
              isBlog={false}
              title="🏢 Estate – Conciergerie immobilière"
              description="Application de gestion immobilière pour entreprises de conciergerie, avec suivi des biens, états et réservations."
              demoLink="https://estate-frontend-six.vercel.app/"
              githubLink="https://github.com/username/estate"
              technologie="NuxtJS, NestJS, MongoDB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="💼 Tepe – Plateforme d’emploi"
              description="Plateforme de recherche d'emploi pour chercheurs, écoles et entreprises, avec gestion des offres et des candidatures."
              githubLink="https://github.com/username/tepe"
              technologie="Next.js, Laravel, MySQL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="🍅 My Rotten Tomatoes"
              description="Plateforme de streaming où les utilisateurs peuvent noter, commenter, ajouter en favoris et visionner des films."
              githubLink="https://github.com/username/rottentomatoes"
              technologie="NestJS, NuxtJS, MongoDB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="🎫 Show Time – Réservation de billets"
              description="Application de réservation de billets pour concerts avec système de paiement sécurisé et suivi des événements."
              githubLink="https://github.com/username/showtime"
              technologie="ReactJS, MongoDB"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
