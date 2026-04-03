import { useState, useEffect, useMemo } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "@/components/commons/system/Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import ResumeFile from "@/Assets/resume/Nguyen_Hoang_Hai_Resume.pdf";
import PaginationComponent from "@/components/commons/system/Pagination";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfWidth, setPdfWidth] = useState(600);

  const documentOptions = useMemo(() => ({ workerSrc: "/pdf.worker.js" }), []);

  const isMobile = useMemo(() => window.innerWidth < 786, []);

  useEffect(() => {
    const handleResize = () => {
      const calculatedWidth = !isMobile ? 600 : window.innerWidth - 30;
      setPdfWidth(calculatedWidth);
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

  const onDocumentLoadSuccess = (numPages: number) => {
    setNumPages(numPages);
    setPageNumber((prev) => (prev > numPages ? 1 : prev));
  };

  const buttonWidth = Math.floor(pdfWidth / (!isMobile ? 3 : 2.5));

  return (
    <div className="min-h-screen">
      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume pt-12 pb-12 justify-center">
          <div className="w-full flex justify-center overflow-auto">
            <Document
              file={ResumeFile}
              onLoadSuccess={(document) =>
                onDocumentLoadSuccess(document?.numPages)
              }
              className="flex justify-center"
              options={documentOptions}
            >
              <Page
                pageNumber={pageNumber}
                scale={!isMobile ? 1.7 : 0.9}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                width={pdfWidth}
              />
            </Document>
          </div>
        </Row>

        {ResumeFile && numPages && numPages > 1 && (
          <Row className="justify-center relative mt-8 mb-8">
            <PaginationComponent
              currentPage={pageNumber}
              totalPages={numPages}
              onPageChange={setPageNumber}
              size="sm"
            />
          </Row>
        )}

        {ResumeFile && (
          <Row
            className={`justify-center relative mb-16 ${
              numPages && numPages > 1 ? "mt-8" : "mt-0"
            }`}
          >
            <Button
              variant="primary"
              onClick={handleDownloadCV}
              className="bg-[#623686] border-[#623686] hover:bg-[#6d20c5d7] hover:border-[#6d20c5d7] focus:outline-none focus:shadow-none"
              style={{ width: `${buttonWidth}px` }}
            >
              <AiOutlineDownload className="inline-block" />
              <span className="ml-1">Download CV</span>
            </Button>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Resume;
