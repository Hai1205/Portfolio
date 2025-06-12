import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props?.imgPath} alt="card-img" />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{props?.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props?.description}
        </Card.Text>

        <div>
          <Button variant="primary" href={props?.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props?.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props?.isBlog && props?.demoLink && (
            <Button
              variant="primary"
              href={props?.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

ProjectCards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
  isBlog: PropTypes.bool,
};

export default ProjectCards;
