import { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/Particle";
import Github from "./components/Github";
import Technology from "./components/Technology";
import AboutCard from "./components/AboutCard";
import laptopImg from "../../Assets/about.png";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiMysql,
  DiLinux,
  DiPhp,
  DiRust,
  DiDjango,
  DiCss3,
  DiGit, 
  DiNetbeans
} from "react-icons/di";
import {
  SiNextdotjs,
  SiSolidity,
  SiNestjs,
  SiExpress,
  SiSpring,
  SiKotlin,
  SiLatex,
  SiTailwindcss,
  SiHtml5,
  SiTypescript,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiVite,
  SiIntellijidea,
  SiPycharm,
  SiWebstorm,
  SiXampp,
  SiDatagrip,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaAws, FaDocker, FaEdge } from "react-icons/fa";

function About() {
  const programs = useMemo(() => [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "NestJS", icon: <SiNestjs /> },
    { name: "React", icon: <DiReact /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Spring", icon: <SiSpring /> },
    { name: "Django", icon: <DiDjango /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <DiNodejs /> },
    { name: "API", icon: <TbApi /> },
    { name: "LaTeX", icon: <SiLatex /> },
    { name: "Solidity", icon: <SiSolidity /> },
    { name: "Rust", icon: <DiRust /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "MySQL", icon: <DiMysql /> },
    { name: "CSS3", icon: <DiCss3 /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "PHP", icon: <DiPhp /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "Python", icon: <DiPython /> },
    { name: "Kotlin", icon: <SiKotlin /> },
    { name: "Java", icon: <DiJava /> },
    { name: "C++", icon: <CgCPlusPlus /> },
  ], []);  

  const tools = useMemo(() => [
    { name: "Microsoft Edge", icon: <FaEdge /> },
    { name: "Visual Studio Code", icon: <SiVisualstudiocode /> },
    { name: "NetBeans", icon: <DiNetbeans /> },
    { name: "XAMPP", icon: <SiXampp /> },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
    { name: "PyCharm", icon: <SiPycharm /> },
    { name: "WebStorm", icon: <SiWebstorm /> },
    { name: "DataGrip", icon: <SiDatagrip /> },
    { name: "Git", icon: <DiGit /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Linux", icon: <DiLinux /> },
  ], []);

  return (
    <Container fluid className="about-section">
      <Particle />
      
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I&apos;M</strong>
            </h1>
            <AboutCard />
          </Col>
          
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
        <h1 className="project-heading">
          Professional <strong className="purple">Skill</strong>
        </h1>

        <Technology tools={programs} />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
       
        <Technology tools={tools} />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
