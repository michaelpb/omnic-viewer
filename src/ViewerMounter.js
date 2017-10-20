import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import PdfViewer from './viewers/PdfViewer';

export default class ViewerMounter extends Component {
    static propTypes = {
        thumbSrc: PropTypes.string,
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
        if (this.props.viewerType === 'PDF') {
            return (
                <div>
                    <PdfViewer src={this.props.viewerSrc} />
                </div>
            );
        } else if (this.props.viewerType === 'JPEG') {
            return (
                <div>
                    <img src={this.props.viewerSrc} />
                </div>
            );
        } else {
            return (
                <div>
                    <PdfViewer src={this.props.viewerSrc} />
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

