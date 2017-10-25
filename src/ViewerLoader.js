/*
    Singleton for loading viewers
*/

import PdfViewer from './components/viewers/pdf/PdfViewer';
import StlViewer from './components/viewers/stl/StlViewer';
import ImageViewer from './components/viewers/image/ImageViewer';

export default class ViewerLoader {
    constructor() {
    }

    get(viewerType) {
        switch (viewerType) {
            case 'PDF':
                return PdfViewer;
            case 'STL':
                return StlViewer;
            case 'JPEG':
            case 'JPG':
            case 'PNG':
            case 'BMP':
            case 'GIF':
            case 'TIFF':
            case 'TIF':
            case 'WEBP':
                return ImageViewer;
            default:
                return null;
        }
    }
}

