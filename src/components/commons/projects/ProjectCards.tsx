import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import defaultImg from "@/Assets/images/projects/default.png";

interface ProjectCardsProps {
  project: IProject;
}

function ProjectCards({ project }: ProjectCardsProps) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={project?.imgPath || defaultImg} alt="card-img" className="p-5 opacity-80 rounded-xl" />

      <Card.Body className="flex flex-col flex-grow">
        <Card.Title className="text-[#623686]">{project?.title}</Card.Title>


        <Card.Text className="text-left tracking-normal leading-relaxed flex-grow mb-4">
          {project?.description}
        </Card.Text>

        <div>
          <Button variant="primary" href={project?.ghLink} target="_blank" className="bg-[#623686] border-[#623686] hover:bg-[#6d20c5d7] hover:border-[#6d20c5d7] focus:outline-none focus:shadow-none">
            <BsGithub /> &nbsp;
            {project?.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!project?.isBlog && project?.demoLink && (
            <Button
              variant="primary"
              href={project?.demoLink}
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
