# OmniC Viewer

![Travis CI](https://travis-ci.org/michaelpb/omnic-viewer.svg?branch=master)

![OmniC Viewer badge](https://badge.fury.io/js/omnic-viewer.png)

A file viewer bundle that can visualize in different ways a variety of
different file-types. It is intended as a drop-in supplement to web apps that
utilize Omni-Converter, although could be used separately. It is built using
React.js, which means it can be used only in parts if that's wanted.

* [Click here for more information on Omni-Converter, the stateless micro-service
in development that does dozens on-the-fly file conversion to replace
build-steps and worker queues, along with a demo.](http://omnic.michaelb.org/)

* **WIP:** API subject to drastic change, and not yet documented. Not ready for
public usage, mostly just intended to be used as an internally used library.

* This project was started with create-react-app. The original [README
  documentation can be found here](CREATE_REACT_APP.md).

# Usage

1. Build JavaScript into a file using webpack (See: The original [README
documentation can be found here](CREATE_REACT_APP.md) for more info.)

2. Include that file with a script tag

3. Throughout your HTML document, specify `img` mount-points, which
consist of an image which is a thumbnail and a link to the file you wish to
view, along with the filetype of the file you wish to view. Example:

```
<img
    src="/media/imrtemplate_doc.jpg"
    width="200"
    height="200"
    omnic-thumb
    omnic-viewer="PDF"
    omnic-viewer-src="/media/imrtemplate_doc.pdf"
/>
```

4. In its imagined use, this would be pointing at OmniC media servers. If you
are not using OmniC backend, then use format like:


```
<img
    src="/media/imrtemplate_doc.jpg"
    width="200"
    height="200"
    omnic-no-api="true"
    omnic-viewer="PDF"
    omnic-viewer-src="/media/imrtemplate_doc.pdf"
/>
```

# Getting a dev environment set up

1. Ensure you have at least node version 8. Consider using a tool like `nvm` to
manage multiple versions of node.

2. Install dependencies: `npm install`

3. Run test server: `npm start`

# Contributing a converter

* **WIP:** The current viewer system API will change: This is will eventually
  be an extensible system for which custom builds including or excluding
  certain types are readily available (not everyone wants a kitchen-sink
  approach!).  Until then, the following steps can be followed to add a new
  viewer.

1. Fork this project, get a dev environment gong, etc, so you can get going

2. Create a new Viewer React component class in
`src/components/viewers/YourViewerName.js`. It should expect two string
properties: `src` (URL or path to media content) and `type` (all-caps file
extension designating expected type)

3. Add any relevant CSS to: `src/components/viewers/YourViewerName.css` (and
import into the JS file)

3. Add a demo to `public/index.html` in the format of the others

4. Finally, add the viewer to the ViewerLoader, by import your new viewer in
`src/ViewerLoader.js`, and adding it to the switch statement, like:

```
switch 'EXTENSION':
switch 'ANOTHEREXTENSION':
    return YourViewerName;
```

All contributors for any OmniC related project should review the [Code of
Conduct](CONDUCT.md).



