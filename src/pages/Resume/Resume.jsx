import { useState, useEffect, useMemo } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../../components/Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import ResumeFile from "../../Assets/Nguyen_Hoang_Hai_Resume.pdf";
import Pagination from "./components/Pagination";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const documentOptions = useMemo(() => ({ workerSrc: "/pdf.worker.js" }), []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (numPages && pageNumber > numPages) {
      setPageNumber(1);
    }
  }, [numPages, pageNumber]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = ResumeFile;
    link.download = "Nguyen_Hoang_Hai_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(prev => (prev > numPages ? 1 : prev));
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              overflow: "auto"
            }}
          >
            <Document
              file={ResumeFile}
              onLoadSuccess={onDocumentLoadSuccess}
              className="d-flex justify-content-center"
              options={documentOptions}
            >
              <Page
                pageNumber={pageNumber}
                scale={width > 786 ? 1.7 : 0.9}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                width={width > 786 ? 600 : width - 30}
              />
            </Document>
          </div>
        </Row>

        {ResumeFile && numPages > 1 &&
          <Row style={{ justifyContent: "center", position: "relative", marginTop: "-30px" }}>
            <Pagination
              currentPage={pageNumber}
              totalPages={numPages}
              onPageChange={setPageNumber}
            />
          </Row>
        }

        {ResumeFile &&
          <Row style={{ justifyContent: "center", position: "relative", marginTop: numPages > 1 ? "20px" : "-20px", marginBottom: "10px" }}>
            <Button
              variant="primary"
              onClick={handleDownloadCV}
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        }
      </Container>
    </div>
  );
}

export default Resume;