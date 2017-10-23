import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileViewer from 'react-file-viewer';

class TempErrorComponent extends Component {
    render() {
        return (
            <pre>Error: { JSON.stringify(this.props, null, 2) }</pre>
        );
    }
}

export default class FileViewerWrapper extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }

    render() {
        const { src, type } = this.props;
        const lowerType = type.toLowerCase();
        return (
            <FileViewer
                fileType={lowerType}
                filePath={src}
                errorComponent={TempErrorComponent}
                onError={this.onError}
            />
        );
    }

    onError(e) {
        console.error(e, 'error in file-viewer');
    }
}
