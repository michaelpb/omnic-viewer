# Viewer types

- [ ] PDF
    - Nice looking PDF viewer
    - Flip through pages, OR display all pages in a list
    - Nice to have:
        - Allow zoom, panning

- [ ] MP3/OGG/M3U/etc
    - Embedded audio player

- [ ] MP4/WEBM/AVI/etc
    - Embedded video player
    - Maybe support multiple codecs and resolutions? (e.g. 1080, 720, 480, 360
      -- OmniC would take care of the transcoding)

- [ ] JPEG/PNG/WEBP
    - Must have:
        - Smaller images:
            - Centered, displayed cleanly
        - Larger images:
            - Shrink to size of display (check if there is some clever CSS to
              do this)
    - Nice to have:
        - SVG support (panning / zoom is a must have for SVGs)
        - Larger images:
            - Support panning
            - Start zoomed out
            - Possibly support zoom in/out?
    - React file viewer has something like this, check it out

- [ ] STL (or OBJ)
    - 3D rotatable mesh
    - JSC3D
        - I've had success with, so I think I will just make a react-jsc3d
          package we can use
        - Pros: Lightweight, very few dependencies, high browser compatibility,
          looks decent, already have a configuration written for Open Lab that
          looks good for the models we are rendering

- [ ] CSV
    - Some sort of grid-type component (see react-file-viewer's implementation,
      probably useful!)

- [ ] Source code (e.g. js, py, json, etc)
    - For code snippets
    - Syntax highlighting, scrolling, etc

- [ ] HTML
    - Raw, pre-styled HTML (maybe in an iframe?)


# Low priority

- docx
    - react-file-viewer supported this type
- Panorama 360 images
    - react-file-viewer supported this type

