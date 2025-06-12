import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface ProjectCardsProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
  isBlog?: boolean;
}

function ProjectCards(props: ProjectCardsProps) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props?.imgPath} alt="card-img" className="p-5 opacity-80 rounded-xl" />

      <Card.Body className="flex flex-col flex-grow">
        <Card.Title className="text-[#623686]">{props?.title}</Card.Title>

        <Card.Text className="text-justify flex-grow mb-4">
          {props?.description}
        </Card.Text>

        <div>
          <Button variant="primary" href={props?.ghLink} target="_blank" className="bg-[#623686] border-[#623686] hover:bg-[#6d20c5d7] hover:border-[#6d20c5d7] focus:outline-none focus:shadow-none">
            <BsGithub /> &nbsp;
            {props?.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props?.isBlog && props?.demoLink && (
            <Button
              variant="primary"
              href={props?.demoLink}
              target="_blank"
              className="ml-2.5 bg-[#623686] border-[#623686] hover:bg-[#6d20c5d7] hover:border-[#6d20c5d7] focus:outline-none focus:shadow-none"
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

export default ProjectCards;
