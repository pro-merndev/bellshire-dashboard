'use client';

import styled from 'styled-components'
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import type { PDFDocumentProxy } from 'pdfjs-dist';

const PDFDocumentWrapper = styled.div`
  canvas {
    width: 100% !important;
    height: auto !important;
    border-radius: 20px
  }
`;
export default function PDFPeview() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: PDFDocumentProxy) {
    setNumPages(numPages);
  }

  return (
    <PDFDocumentWrapper>
      <Document
        file="/gant-chart.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className={"w-full"}
      >
        <Page
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          className={
            'flex !w-full !max-w-full items-center justify-center overflow-hidden !rounded-3xl !bg-transparent'
          }
        />
      </Document>
    </PDFDocumentWrapper>
  );
}
