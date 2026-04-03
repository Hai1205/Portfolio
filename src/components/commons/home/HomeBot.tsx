import { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../../Assets/svg/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomeBot() {
  const socialLinks = useMemo(() => [
    {
      icon: <AiFillGithub />,
      link: "https://github.com/Hai1205",
    },
    {
      icon: <AiOutlineTwitter />,
      link: "https://x.com/hainguyen_1205",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/hai-nguyen-hoang-a85546248/",
    },
    {
      icon: <AiFillInstagram />,
      link: "https://www.instagram.com/nhh_1205",
    },
  ], []);
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="text-[2.6em]">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I fell in love with programming and I have at least learn
              something, I think… 🤷‍♂️

              <br />
              <br />

              I am fluent in classics like

              <i>
                <b className="purple">{" "} Javascript, Java, Python, MySQL and MongoDB. {" "}</b>
              </i>

              <br />
              <br />

              My field of Interest&apos;s are building new &nbsp;

              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">Blockchain.</b>
              </i>

              <br />
              <br />

              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Spring Boot</b> and

              <i>
                <b className="purple">
                  {" "} Modern Javascript Library and Frameworks
                </b>
              </i>

              &nbsp; like

              <i>
                <b className="purple">
                  {" "} Next.js
                </b>
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
            <h1>FIND ME ON</h1>

            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

            <ul className="home-about-social-links">
              {socialLinks.map((item, index) => (
                <li key={index} className="social-icons">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color home-social-icons"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeBot;
