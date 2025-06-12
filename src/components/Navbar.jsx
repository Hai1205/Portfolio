import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const tabs = [
    {
      path: "/",
      name: "Home",
      icon: <AiOutlineHome style={{ marginBottom: "2px" }} />
    },
    {
      path: "/about",
      name: "About",
      icon: <AiOutlineUser style={{ marginBottom: "2px" }} />
    },
    {
      path: "/project",
      name: "Projects",
      icon: <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
    },
    {
      path: "/resume",
      name: "Resume",
      icon: <CgFileDocument style={{ marginBottom: "2px" }} />
    }
  ];

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="Hai Nguyen" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpand(expand ? false : "expanded");
          }}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {tabs.map((tab, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={Link}
                  to={tab.path}
                  onClick={() => setExpand(false)}
                >
                  {tab.icon} {tab.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
