import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Jsc3dViewer from 'react-jsc3d'

export default class PdfViewer extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
    }

    render() {
        return (
            <Jsc3dViewer sceneUrl={this.props.src} />
        );
    }
}

