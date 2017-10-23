import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* import { Document, Page } from 'react-pdf'; */
import { } from 'react-pdf/build/entry.webpack';

// import STLViewer from 'stl-viewer'


export default class PdfViewer extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
    }

    render() {
        return (<div>Placeholder!</div>);

        /*
        return (
            <div>
                <STLViewer
                    url={this.props.src}
                    loading={false}
                    width={400}
                    height={400}
                    modelColor='#B92C2C'
                    backgroundColor='#EAEAEA'
                    rotate={true}
                    orbitControls={true}
                />
            </div>
        );
        */
    }
}

