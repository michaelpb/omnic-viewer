import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ViewerLoader from '../ViewerLoader';
import ReloadingThumb from './ReloadingThumb';
import ReloadingViewer from './ReloadingViewer';
import './ViewerMounter.css';

// Bring in image
import loadingCircle from './loading-circle.svg'
import playButtonCircle from './play-button-circle.svg'

export default class ViewerMounter extends Component {
    static propTypes = {
        thumbRetryTimeout: PropTypes.number,
        thumbSrc: PropTypes.string,
        viewerLoader: PropTypes.instanceOf(ViewerLoader).isRequired,
        viewerType: PropTypes.string.isRequired,
        viewerSrc: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }

    static defaultProps = {
        thumbRetryTimeout: 2000, // check after 2 seconds
    }

    state = {
        modalVisible: false,
    }

    renderViewer() {
        const { viewerType, viewerLoader, viewerSrc } = this.props;
        if (viewerType === 'JPEG') {
            return (
                <div>
                    <img src={viewerSrc} />
                </div>
            );
        } else {
            const Component = viewerLoader.get(viewerType);
            return (
                <div>
                    <Component
                        src={viewerSrc}
                        type={viewerType}
                    />
                </div>
            );
        }
    }

    onClick() {
        this.setState({ modalVisible: true });
    }

    render() {
        const { height, width, viewerSrc } = this.props;
        const style = { height, width };

        return (
            <div className="OC--ViewerMounter" style={style}>
                <Modal
                    isOpen={this.state.modalVisible}
                    onRequestClose={() => this.setState({ modalVisible: false})}
                    contentLabel={this.props.viewerType}>
                    <ReloadingViewer
                        width={width}
                        height={height}
                        viewerSrc={viewerSrc}
                    >
                        {this.renderViewer()}
                    </ReloadingViewer>
                </Modal>
                <ReloadingThumb
                    onClick={() => this.onClick() }
                    {...this.props}
                />
            </div>
        );
    }
}

