import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/svg/home-main.svg";
import Particle from "../../components/Particle";
import Home2 from "./components/HomeBot";
import TypeWriter from "./components/TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading pb-4">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I&apos;M <strong className="main-name"> Hai Nguyen</strong>
              </h1>

              <div className="pl-12 pr-12 py-8 text-left">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5} className="pb-5">
              <img
                src={homeLogo}
                alt="home"
                className="img-fluid max-h-[450px]"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
