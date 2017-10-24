import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ViewerLoader from '../ViewerLoader';
import './ViewerMounter.css';

// Bring in image
import loadingCircle from './loading-circle.svg'
import playButtonCircle from './play-button-circle.svg'

export default class ViewerMounter extends Component {
    static propTypes = {
        thumbSrc: PropTypes.string,
        viewerLoader: PropTypes.instanceOf(ViewerLoader).isRequired,
        viewerType: PropTypes.string.isRequired,
        viewerSrc: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }

    state = {
        modalVisible: false,
        isLoading: true,
        clickRequested: false,
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
        if (this.state.isLoading) {
            this.setState({ clickRequested: true, modalVisible: false });
        } else {
            this.setState({ clickRequested: false, modalVisible: true });
        }
    }

    render() {
        const { clickRequested, isLoading } = this.state;

        let floatingImage = null;
        let floatingImageClasses = ['ViewMounter--float-image'];
        if (clickRequested && isLoading) {
            floatingImage = loadingCircle;
            floatingImageClasses.push('ViewMounter--float-image-spin');
        } else {
            floatingImage = playButtonCircle;
            floatingImageClasses.push('ViewMounter--invisible');
        }

        const floatingImageComponent = floatingImage === null ? null : (
            <img
                className={floatingImageClasses.join(' ')}
                onClick={() => this.onClick()}
                src={floatingImage}
            />
        );

        const { height, width } = this.props;
        const style = { height, width };

        return (
            <div className="ViewerMounter" style={style}>
                <Modal
                    isOpen={this.state.modalVisible}
                    onRequestClose={() => this.setState({ modalVisible: false})}
                    contentLabel={this.props.viewerType}>
                    {this.renderViewer()}
                </Modal>
                <img
                    src={this.props.thumbSrc}
                    width={width}
                    height={height}
                    onClick={() => this.onClick()}
                />
                { floatingImageComponent }
            </div>
        );
    }
}

