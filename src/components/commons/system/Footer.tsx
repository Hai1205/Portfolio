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
    <footer className="bg-[#0a0416] py-2.5 w-full mt-auto">
      <Container>
        <Row>
          <Col md="4" className="text-center">
            <h3 className="text-white text-base my-2">Designed and Developed by {name}</h3>
          </Col>

          <Col md="4" className="text-center">
            <h3 className="text-white text-base my-2">Copyright © 2025 {name}.</h3>
          </Col>

          <Col md="4" className="z-10 text-center">
            <ul className="flex justify-center my-2 p-0">
              {socialLinks.map((link, index) => (
                <li key={index} className="inline-block px-4">
                  <a
                    href={link.url}
                    className="text-white hover:text-[#87209e] hover:shadow-md hover:shadow-[#87209e] transition-all duration-200"
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
    </footer>
  );
}

export default Footer;
