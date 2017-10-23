/*
Singleton for loading viewers
*/

import PdfViewer from './components/viewers/PdfViewer';
import StlViewer from './components/viewers/StlViewer';
import FileViewerWrapper from './components/viewers/FileViewerWrapper';

export default class ViewerLoader {
    constructor() {
    }

    get(viewerType) {
        switch (viewerType) {
            case 'PDF':
                return PdfViewer;
            case 'STL':
                return StlViewer;
            /*
                case 'JPEG':
                case 'PDF':
                case 'CSV':
                case 'XLSX':
                case 'DOCX':
                case 'MP4':
                case 'WEBM':
                case 'MP3':
                    return FileViewerWrapper;
            */
            default:
                return null;
        }
    }
}

