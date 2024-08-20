'use client'

import { Document, Page, pdfjs } from "react-pdf";
import React from "react";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

interface PDFViewerInterface {
    url: string
}

const PDFViewer = ({url}:PDFViewerInterface) => {
    const options = {
        cMapUrl: "cmaps/",
        cMapPacked: true,
        standardFontDataUrl: "standard_fonts/",
    };
    return(
        <Document
            file={url}
            options={options}
            renderMode="canvas"
            className=""
        >
            <Page
                className=""
                renderAnnotationLayer={false}
                renderTextLayer={false}
            />
        </Document>
    )
}

export default PDFViewer
