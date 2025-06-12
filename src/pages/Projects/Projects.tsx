import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./components/ProjectCards";
import Particle from "../components/Particle";

import facebook from "../../Assets/project_images/facebook.png";
import countTheLoveDay from "../../Assets/project_images/countTheLoveDay.png";
import sportify from "../../Assets/project_images/sportify.png";
import x from "../../Assets/project_images/x.png";
import overflow from "../../Assets/project_images/overflow.png";
import profile from "../../Assets/project_images/profile.png";
import carMaster from "../../Assets/project_images/carMaster.png";

function Projects() {
  const projectList = [
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
      imgPath: overflow,
      isBlog: false,
      title: "Overflow",
      description:
        "Overflow is a small web project built with HTML, CSS, and JavaScript. When the user clicks the \"Click here\" button, the page plays music and displays a series of notifications on the screen, creating a \"memory overflow\" effect. After the effect finishes, a special message appears in the center of the screen with animated text and a link to redirect to another page.",
      ghLink: "https://github.com/Hai1205/Overflow.git",
      demoLink: "https://hai1205.github.io/Overflow/",
    },
    {
      imgPath: countTheLoveDay,
      isBlog: false,
      title: "Count The Love Day",
      description:
        "CountTheLoveDays is a simple and romantic web project that visualizes the number of days a couple has been together. It features animated heart effects, a live clock, and a photo memory section with a polaroid-style reveal animation. The project is built using HTML, CSS, and JavaScript, and is fully responsive.",
      ghLink: "https://github.com/Hai1205/Count-The-Love-Days.git",
      demoLink: "https://hai1205.github.io/Count_The_Love_Days/",
    },
    {
      imgPath: profile,
      isBlog: false,
      title: "Personal Profile Webpage",
      description:
        "This project is a simple personal profile webpage built with HTML and CSS. It displays an avatar, name, and quick contact buttons for phone, Facebook, Instagram, Twitter, TikTok, and GitHub. The design is responsive and uses modern fonts and icons.",
      ghLink: "https://github.com/Hai1205/Profile.git",
      demoLink: "https://hai1205.github.io/Profile/",
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
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
