import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Card.Img variant="top" src={props.imgPath} alt="project-img" />

      <Card.Body style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
          {props.description}
        </Card.Text>

        <div className="card-footer-buttons mt-auto" style={{ marginTop: "auto" }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" className="m-1">
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" className="m-1">
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
