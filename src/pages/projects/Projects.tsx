import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "@/components/commons/projects/ProjectCards";
import Particle from "@/components/commons/system/Particle";

import myBlog from "@/Assets/images/projects/my-blog.png";
import jobReady from "@/Assets/images/projects/job-ready.png";
import learnEng from "@/Assets/images/projects/learn-eng.png";
import facebook from "@/Assets/images/projects/facebook.png";
import sportify from "@/Assets/images/projects/sportify.png";
import x from "@/Assets/images/projects/x.png";
import carMaster from "@/Assets/images/projects/carMaster.png";

function Projects() {
  const projectList: IProject[] = [
    {
      imgPath: myBlog,
      isBlog: false,
      title: "My Blog",
      description:
        "MyBlog combines modern web technologies to deliver a seamless blogging experience. Built with a microservices architecture on the backend and a responsive Next.js frontend, it provides everything needed to create, manage, and share blog content.",
      ghLink: "https://github.com/Hai1205/MyBlog.git",
    },
    {
      imgPath: jobReady,
      isBlog: false,
      title: "Job Ready",
      description:
        "Job Ready is a CV creation platform based on microservice architecture, helping users quickly create, customize and export professional CVs in PDF format.",
      ghLink: "https://github.com/Hai1205/JobReady.git",
    },
    {
      imgPath: learnEng,
      isBlog: false,
      title: "Learn English",
      description:
        "English vocabulary learning platform built with Next.js, MongoDB, and TypeScript. featuring flash cards, quizzes, and progress tracking.",
      ghLink: "https://github.com/Hai1205/LearnEng.git",
      demoLink: "https://learn-vol-eng.vercel.app",
    },
    {
      imgPath: facebook,
      isBlog: false,
      title: "Facebook Clone",
      description:
        "Facebook Clone is a full-featured social networking web application inspired by Facebook. It supports features like posting statuses, stories, user and post management, and more.",
      ghLink: "https://github.com/Hai1205/Facebook.git",
    },
    {
      imgPath: sportify,
      isBlog: false,
      title: "Sportify Clone",
      description:
        "Sportify is a web-based music streaming application inspired by Spotify, offering a full range of features for music playback, song and album management, user interaction, and more.",
      ghLink: "https://github.com/Hai1205/Sportify.git",
    },
    {
      imgPath: x,
      isBlog: false,
      title: "X Clone",
      description:
        "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase...",
      ghLink: "https://github.com/Hai1205/X",
    },
    {
      imgPath: carMaster,
      isBlog: false,
      title: "CarMaster",
      description:
        "CarMaster is a Java-based application designed to manage car-related data efficiently. It provides a user-friendly interface for storing, updating, and retrieving information about cars, making it suitable for car dealerships, rental services, or personal collections.",
      ghLink: "https://github.com/Hai1205/CarMaster",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>

        <p className="text-white">
          Here are a few projects I&apos;ve worked on recently.
        </p>

        <Row className="flex justify-center pb-2.5">
          {projectList.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
