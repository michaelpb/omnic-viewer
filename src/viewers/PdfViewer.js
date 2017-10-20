import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

export default class PdfViewer extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad({ numPages }) {
        this.setState({ numPages });
    }

    render() {
        return (
            const { pageNumber, numPages } = this.state;

            <div>
                <Document
                    file="somefile.pdf"
                    onLoadSuccess={this.onDocumentLoad}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        );
    }
}

