/*
    Singleton for loading viewers
*/

import PdfViewer from './components/viewers/pdf/PdfViewer';
import StlViewer from './components/viewers/stl/StlViewer';

export default class ViewerLoader {
    constructor() {
    }

    get(viewerType) {
        switch (viewerType) {
            case 'PDF':
                return PdfViewer;
            case 'STL':
                return StlViewer;
            default:
                return null;
        }
    }
}

