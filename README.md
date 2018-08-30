# OmniC Viewer

![Travis CI](https://travis-ci.org/michaelpb/omnic-viewer.svg?branch=master)

![OmniC Viewer badge](https://badge.fury.io/js/omnic-viewer.png)

![Logo](./mock-omnic/test-media/logo_small.png) **OmniC Viewer** is a framework
agnostic file viewer bundle that can visualize in different ways a variety of
different file-types. It is intended as a drop-in supplement to web
applications that utilize Omni-Converter, although it can be used separately.
It can also be used directly within a larger React.js application.

* [See also Omni-Converter (`omnic`): The stateless micro-service for
  on-the-fly media conversion.](http://omnic.michaelb.org/)

* **WIP:** API subject to drastic change, and not yet documented. Not ready for
public usage, mostly just intended to be used as an internally used library.

# Usage

1. Use a pre-built script tag (TODO: Don't have one up yet!), or build
JavaScript into a file using webpack (See: The original [README documentation
can be found here](CREATE_REACT_APP.md) for more info.)

2. Include that file with a script tag

3. Include the generated CSS with a link in the header

4. Throughout your HTML document, specify `img` mount-points, which
consist of an image which is a thumbnail and a link to the file you wish to
view, along with the file type of the file you wish to view. Example:

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

Using the OmniC conversion system, it would look like:

```
<img
    src="/media/thumb.jpg:200x200/?url=http://mysite.com/myfile.doc"
    width="200"
    height="200"
    omnic-thumb
    omnic-viewer="PDF"
/>
```


This image mount-point system is friendly to both multi-page apps for which the
OmniC system was first designed, and single-page apps, and makes no assumptions
about JavaScript frameworks. Furthermore, it allows the thumbnail to load
before JavaScript, making for a fast and responsive experience even on poor
connections, while following the principles of [Progressive
Enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement).

----

# [Contributing](CONTRIBUTING.md)

**This software is free software, licensed under the GPL 3.0.**


