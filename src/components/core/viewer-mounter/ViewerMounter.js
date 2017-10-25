import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ViewerLoader from '../../../ViewerLoader';
import ReloadingThumb from '../reloading-thumb/ReloadingThumb';
import ReloadingViewer from '../reloading-viewer/ReloadingViewer';
import './ViewerMounter.css';

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
    }

    renderViewer() {
        const { viewerType, viewerLoader, viewerSrc } = this.props;
        const Component = viewerLoader.get(viewerType);
        if (Component === null) {
            return (
                <div><strong>No viewer for: {viewerType}</strong></div>
            )
        }

        return (
            <Component
                src={viewerSrc}
                type={viewerType}
            />
        );
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

