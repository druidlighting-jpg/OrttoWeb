Place the provided ORTTO logo image in this `assets` folder with the filename `ortto-logo.png`.

Recommended:
- Filename: ortto-logo.png
- Path: assets/ortto-logo.png
- Format: PNG or SVG (SVG preferred for scaling)
- Suggested size: 200x200 px (logo circle). The CSS in `index.html` will fit the image into a 50x50px logo circle by default; using a square image with transparent background works best.

If you'd like the image to load from another path or name, update the `src` attribute in `index.html` near the top header:

    <img src="assets/ortto-logo.png" alt="ORTTO logo" class="logo-img">

You can also replace the `class` or adjust the `.logo-img` CSS in the style block to change sizing.
