import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../widgets/loading-spinner/LoadingSpinner';

// Bring in image
// import loadingCircle from './loading-circle.svg'

const CACHE_BUST_PARAM = 'ignore-viewercache';

export default class ReloadingThumb extends Component {
    static propTypes = {
        retryTimeout: PropTypes.number,
        thumbSrc: PropTypes.string,
        viewerType: PropTypes.string.isRequired,
        viewerSrc: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }

    static defaultProps = {
        retryTimeout: 2000, // check after 2 seconds
    }

    state = {
        modalVisible: false,
        isLoading: false,
        browserCacheBustNumber: null,
    }

    retryThumb() {
        // Reset cache to an arbitrary number
        const browserCacheBustNumber = new Date().getTime();
        this.setState({ browserCacheBustNumber });
    }

    checkThumb() {
        // TODO: naturalHeight/naturalWidth is unsupported in IE8
        const thumb = this.thumbElement;
        const { retryTimeout } = this.props;

        // Check if we already have a timeout cached, ensure it gets cleared
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = null;

        if (thumb.naturalHeight === 1 && thumb.naturalWidth === 1) {
            // Is a placeholder, retry thumb after a delay
            if (!this.state.isLoading) {
                this.setState({ isLoading: true });
            } else {
                this.timeout = setTimeout(() => this.retryThumb(), retryTimeout);
            }
        } else {
            if (this.state.isLoading) {
                this.setState({ isLoading: false });
            }
        }
    }

    componentDidMount() {
        this.checkThumb();
    }

    componentDidUpdate() {
        this.checkThumb();
    }

    getThumbSrc() {
        const { thumbSrc } = this.props;
        const { browserCacheBustNumber } = this.state;
        if (browserCacheBustNumber === null) {
            return thumbSrc;
        }

        // TODO: Make this more robust, should parse the URL
        const urlSuffix = `${CACHE_BUST_PARAM}=${browserCacheBustNumber}`;
        const joiner = thumbSrc.includes('?') ? '&' : '?';
        return thumbSrc + joiner + urlSuffix;
    }

    render() {
        const { isLoading } = this.state;
        const { height, width, onClick } = this.props;
        const style = { height, width };
        return (
            <div className="OC--ReloadingThumb" style={style}>
                <img
                    src={this.getThumbSrc()}
                    width={width}
                    height={height}
                    ref={(thumb) => { this.thumbElement = thumb; }}
                    onClick={onClick}
                    onLoad={() => this.checkThumb()}
                />
                {
                    isLoading ? (
                        <LoadingSpinner onClick={onClick} />
                    ) : null
                }
            </div>
        );
    }
}

