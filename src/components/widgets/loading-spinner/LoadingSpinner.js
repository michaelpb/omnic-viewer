import React, { Component } from 'react';
import loadingCircle from './loading-circle.svg'

import './LoadingSpinner.css';

export default class LoadingSpinner extends Component {
    // TODO Eventually add size as an option
    render() {
        return (
            <img
                alt=""
                className="OC--LoadingSpinner"
                onClick={this.props.onClick}
                src={loadingCircle}
            />
        );
    }
}
