import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

interface TechnologyProps { 
  tools: ITool[];
}

function Technology(props: TechnologyProps) {
  const renderTooltip = (toolName: string) => (
    <Tooltip id={`tooltip-${toolName.toLowerCase().replace(/\s+/g, "-")}`}>
      {toolName}
    </Tooltip>
  );

  return (
    <Row className="flex justify-center pb-12">
      {props?.tools?.map((tool: ITool, index: number) => (
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={renderTooltip(tool?.name)}
        >
          <Col xs={4} md={2} className="tech-icons">
            {tool?.icon}
          </Col>
        </OverlayTrigger>
      ))}
    </Row>
  );
}

export default Technology;
