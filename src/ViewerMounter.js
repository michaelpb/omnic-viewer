import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

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
        return (
            <h1>Modal Content</h1>
            <p>Etc.</p>
        )
    }

    render() {
        return (
            <div className="ViewerMounter">
                <p>state: {JSON.stringify(this.state)}</p>
                <p>props: {JSON.stringify(this.props)}</p>
                <Modal
                    isOpen={this.state.modalVisible}
                    onRequestClose={() => this.setState({ modalVisible: false})}
                    contentLabel={this.props.viewerType}
                >
                    {this.renderViewer}
                </Modal>
                <img
                    src={this.props.thumbSrc}
                    width={this.props.width}
                    height={this.props.height}
                    onClick={() => this.setState({ modalVisible: true })}
                    onMouseOver={() => this.setState({ hovering: true})}
                    onMouseOut={() => this.setState({ hovering: false})}
                />
            </div>
        );
    }
}

