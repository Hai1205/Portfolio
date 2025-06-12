import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row className="flex justify-center pb-2.5">
      <h1 className="project-heading pb-5">
        Days I <strong className="purple">Code</strong>
      </h1>

      <GitHubCalendar
        username="Hai1205"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
