import { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "@/components/commons/system/Particle";
import Github from "@/components/commons/about/Github";
import Technology from "@/components/commons/about/Technology";
import AboutCard from "@/components/commons/about/AboutCard";
import laptopImg from "@/Assets/images/about.png";
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
  // DiPhp,
  // DiRust,
  DiDjango,
  DiCss3,
  DiGit,
  DiDotnet,
  DiRedis,
} from "react-icons/di";
import {
  SiNextdotjs,
  // SiSolidity,
  SiNestjs,
  SiExpress,
  SiSpring,
  SiKotlin,
  // SiLatex,
  SiTailwindcss,
  SiHtml5,
  SiTypescript,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiVite,
  SiIntellijidea,
  // SiApachekafka,
  SiRabbitmq,
  // SiPycharm,
  // SiWebstorm,
  SiDatagrip,
  SiLaragon,
} from "react-icons/si";
import { TbApi, TbBrandCSharp } from "react-icons/tb";
import { FaAws, FaDocker } from "react-icons/fa";

function About() {
  const programs = useMemo(
    () => [
      { name: "Spring", icon: <SiSpring /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Django", icon: <DiDjango /> },
      { name: ".NET", icon: <DiDotnet /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "React", icon: <DiReact /> },
      { name: "Node.js", icon: <DiNodejs /> },
      { name: "Java", icon: <DiJava /> },
      { name: "C#", icon: <TbBrandCSharp /> },
      { name: "Python", icon: <DiPython /> },
      { name: "MongoDB", icon: <DiMongodb /> },
      { name: "Redis", icon: <DiRedis /> },
      { name: "MySQL", icon: <DiMysql /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "API", icon: <TbApi /> },
      { name: "RabbitMQ", icon: <SiRabbitmq /> },
      // { name: "Kafka", icon: <SiApachekafka /> },
      // { name: "LaTeX", icon: <SiLatex /> },
      // { name: "Solidity", icon: <SiSolidity /> },
      // { name: "Rust", icon: <DiRust /> },
      { name: "CSS3", icon: <DiCss3 /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      // { name: "PHP", icon: <DiPhp /> },
      { name: "JavaScript", icon: <DiJavascript1 /> },
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "C++", icon: <CgCPlusPlus /> },
    ],
    [],
  );

  const tools = useMemo(
    () => [
      { name: "Visual Studio Code", icon: <SiVisualstudiocode /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Laragon", icon: <SiLaragon /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
      // { name: "PyCharm", icon: <SiPycharm /> },
      // { name: "WebStorm", icon: <SiWebstorm /> },
      { name: "DataGrip", icon: <SiDatagrip /> },
      { name: "Git", icon: <DiGit /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Linux", icon: <DiLinux /> },
    ],
    [],
  );

  return (
    <Container fluid className="about-section">
      <Particle />

      <Container>
        <Row className="flex justify-center p-2.5">
          <Col md={7} className="flex flex-col justify-center pt-8 pb-12">
            <h1 className="text-[2.1em] pb-5">
              Know Who <strong className="purple">I&apos;M</strong>
            </h1>

            <AboutCard />
          </Col>

          <Col md={5} className="about-img pt-28 pb-12 flex items-center">
            <img src={laptopImg} alt="about" className="img-fluid mx-auto" />
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
