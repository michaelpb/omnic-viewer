import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* import { Document, Page } from 'react-pdf'; */
import { Document, Page } from 'react-pdf/build/entry.webpack';



export default class PdfViewer extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
    }

    state = {
        numPages: null,
        pageNumber: 1,
    }

    previousPage() {
        this.setState({ pageNumber: this.state.pageNumber - 1 });
    }

    nextPage() {
        this.setState({ pageNumber: this.state.pageNumber + 1 });
    }

    onDocumentLoad({ numPages }) {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <div>
                <div>
                    <button onClick={() => this.previousPage()}>&larr;</button>
                    Page {pageNumber} of {numPages}
                    <button onClick={() => this.nextPage()}>&rarr;</button>
                </div>
                <Document
                    file={this.props.src}
                    onLoadSuccess={(...args) => this.onDocumentLoad(...args)}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
        );
    }
}

