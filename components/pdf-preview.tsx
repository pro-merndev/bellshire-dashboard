'use client';

import { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function PDFPeview() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="/recomandation-letter.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          className={
            'flex !w-full !max-w-full items-center justify-center overflow-hidden !rounded-3xl !bg-transparent'
          }
          width={1000}
        />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
