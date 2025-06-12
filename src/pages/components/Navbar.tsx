import { useState, useEffect } from "react";
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
      icon: <AiOutlineHome className="mb-0.5" />
    },
    {
      path: "/about",
      name: "About",
      icon: <AiOutlineUser className="mb-0.5" />
    },
    {
      path: "/project",
      name: "Projects",
      icon: <AiOutlineFundProjectionScreen className="mb-0.5" />
    },
    {
      path: "/resume",
      name: "Resume",
      icon: <CgFileDocument className="mb-0.5" />
    }
  ];

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`${navColor ? "sticky" : "navbar"} transition-all duration-300 ease-out`}
    >
      <Container>
        <Navbar.Brand href="/" className="flex">
          <img src={logo} className="img-fluid logo" alt="Hai Nguyen" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpand(expand ? false : true);
          }}
          className="border-transparent focus:outline-none focus:shadow-none"
        >
          <span className="block bg-[#be50f4] h-1 w-7 my-1.5 transform transition-all duration-300" />
          <span className="block bg-[#be50f4] h-1 w-7 my-1.5 transform transition-all duration-300" />
          <span className="block bg-[#be50f4] h-1 w-7 my-1.5 transform transition-all duration-300" />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {tabs.map((tab, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={Link}
                  to={tab.path}
                  onClick={() => setExpand(false)}
                  className="text-lg transition-all duration-200"
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
