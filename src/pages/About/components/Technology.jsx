import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";

function Technology({ tools = [] }) {
  const renderTooltip = (toolName) => (
    <Tooltip id={`tooltip-${toolName.toLowerCase().replace(/\s+/g, "-")}`}>
      {toolName}
    </Tooltip>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools?.map((tool, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={renderTooltip(tool.name)}
        >
          <Col xs={4} md={2} className="tech-icons">
            {tool.icon}
          </Col>
        </OverlayTrigger>
      ))}
    </Row>
  );
}

Technology.propTypes = {
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ),
};

export default Technology;
