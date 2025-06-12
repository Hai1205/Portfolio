import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const name = "Hai Nguyen";

  const socialLinks = [
    {
      name: "Github",
      url: "https://github.com/Hai1205",
      icon: <AiFillGithub />
    },
    {
      name: "Twitter",
      url: "https://x.com/hainguyen_1205",
      icon: <AiOutlineTwitter />
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hai-nguyen-hoang-a85546248/",
      icon: <FaLinkedinIn />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nhh_1205",
      icon: <AiFillInstagram />
    }
  ];

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by {name}</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © 2025 {name}.</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map((link, index) => (
              <li key={index} className="social-icons">
                <a
                  href={link.url}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
