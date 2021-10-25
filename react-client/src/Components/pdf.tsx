import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';
function PDF() {
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  },[]);
  
  return (
    <div>
      <Document file={`${process.env.PUBLIC_URL}/sample_scan.pdf`}>
        <Page pageNumber={pageNumber} /> 
      </Document>
    </div>
  );
}

export default PDF;
