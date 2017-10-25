import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../widgets/loading-spinner/LoadingSpinner';

// Bring in image
// import loadingCircle from './loading-circle.svg'

const CHECKING_PARAM = 'just_checking';

export default class ReloadingViewer extends Component {
    static propTypes = {
        pollTimeout: PropTypes.number,
        viewerSrc: PropTypes.string.isRequired,
        children: PropTypes.any.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
    }

    static defaultProps = {
        pollTimeout: 2000, // check after 2 seconds
    }

    state = {
        isLoading: true,
    }

    getCheckingURL() {
        const { viewerSrc } = this.props;

        // TODO: Make this more robust, should parse the URL
        const urlSuffix = `${CHECKING_PARAM}=true`;
        const joiner = viewerSrc.includes('?') ? '&' : '?';
        return viewerSrc + joiner + urlSuffix;
    }

    checkReady(shouldDelay = true) {
        if (!this.state.isLoading) {
            return; // don't do anything if already ready
        }

        const { pollTimeout } = this.props;

        // Check if we already have a timeout cached, ensure it gets cleared
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = null;

        window.fetch(this.getCheckingURL()).then(response => {
            if (!response.ok) {
                console.error('could not check URL!', response);
                return;
            }
            response.json().then(data => {;
                if (data.ready) {
                    this.setState({isLoading: false});
                } else {
                    this.timeout = setTimeout(() => { this.checkReady(); }, pollTimeout);
                }
            }).catch(err => {
                console.error('Invalid JSON:', err);

                // just stop loading if in error state
                this.setState({isLoading: false});
            });
        });
    }

    componentDidMount() {
        this.checkReady(false);
    }

    componentDidUpdate() {
        this.checkReady();
    }

    render() {
        const { isLoading } = this.state;
        const { height, width, children } = this.props;
        const style = width && height ? { height, width } : {};
        return (
            <div className="OC--ReloadingThumb" style={style}>
                { isLoading ? (<LoadingSpinner />) : children }
            </div>
        );
    }
}

