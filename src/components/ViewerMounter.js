import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ViewerLoader from '../ViewerLoader';

export default class ViewerMounter extends Component {
    static propTypes = {
        thumbSrc: PropTypes.string,
        viewerLoader: PropTypes.instanceOf(ViewerLoader).isRequired,
        viewerType: PropTypes.string.isRequired,
        viewerSrc: PropTypes.string.isRequired,
        width: PropTypes.string,
        heights: PropTypes.string,
    }

    state = {
        modalVisible: false,
        hovering: false,
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

    render() {
        return (
            <div className="ViewerMounter">
                <Modal
                    isOpen={this.state.modalVisible}
                    onRequestClose={() => this.setState({ modalVisible: false})}
                    contentLabel={this.props.viewerType}
                >
                    {this.renderViewer()}
                </Modal>
                <img
                    src={this.props.thumbSrc}
                    width={this.props.width}
                    height={this.props.height}
                    onClick={() => this.setState({ modalVisible: true })}
                    onMouseOver={() => this.setState({ hovering: true })}
                    onMouseOut={() => this.setState({ hovering: false })}
                />
            </div>
        );
    }
}

