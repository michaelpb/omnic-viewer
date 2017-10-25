import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ImageViewer.css';

export default class PdfViewer extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className="OC--ImageViewer">
                <img alt="" src={this.props.src} />
            </div>
        );
    }
}

