import React from 'react';
import ReactDOM from 'react-dom';
import ViewerMounter from './components/core/viewer-mounter/ViewerMounter';
import ViewerLoader from './ViewerLoader';
import registerServiceWorker from './registerServiceWorker';

export const viewerLoader = new ViewerLoader();

export function renderReplace(component, element) {
    const container = document.createElement('div');
    element.parentNode.replaceChild(container, element);
    ReactDOM.render(component, container);
}

export function prepElement(element) {
    const viewerType = element.getAttribute('omnic-viewer');
    const viewerSrc = element.getAttribute('omnic-viewer-src');
    const thumbSrc = element.getAttribute('src');
    const width = Number(element.getAttribute('width'));
    const height = Number(element.getAttribute('height'));
    // Possibly get computed width + height?
    const props = { viewerType, viewerSrc, thumbSrc, width, height, viewerLoader };
    const component = (<ViewerMounter {...props} />);
    renderReplace(component, element);
}

export function mountAll(node = null) {
    // Fall back on document if no other node is specified
    const targetNode = node === null ? document : node;
    const elements = targetNode.querySelectorAll('[omnic-viewer]');
    for (const element of elements) {
        prepElement(element);
    }
}

export function premountAll() {
    const result = document.querySelector('body[omnic-automount], script[omnic-automount]');
    if (result) {
        mountAll();
    }
}

if (document) {
    premountAll();
}

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

