import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Permettez-moi de me <span className="purple"> PRESENTER </span>
            </h1>
            <p className="home-about-body">
            Développeur passionné, spécialisé dans la création d'applications web modernes et performantes,
            Je suis familier avec les langages de programmation <i>
                <b className="purple"> JavaScript, Python, TypeScript et PHP </b>
              </i>
              <br />
              <br />
            Outre le domaine du develepoment web mon intéret va aussi sur les technologies du Web 3.0 plus précisement
              <i>
                <b className="purple"> la Blockchain</b>
              </i>
              <br />
              <br />
              J'ai quelques notion avec les outils comme <b className="purple">Docker, Git</b> et
              <i>
                <b className="purple">
                  {" "}
                  les frameworks modernes
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js, Next.js, Laravel, Vue.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contacts</h1>
            <p>
              Sentez-vous libre de vous <span className="purple"> connecter </span> a mes reseaux sociaux
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nsconsult"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AliNazi96561898"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aliinazim/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aliinazim"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
