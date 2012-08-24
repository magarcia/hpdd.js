# HPDD.js

HPDD.js (High Pixel Density Display) is a solution to make IMG tags compatible
with retina display, easily.


Nowadays we can found more and more products with high pixel density displays,
famous *Retina Display* by Apple and other devices from other companies
like Samsung Galaxy Nexus or Sony Xperia S. Exists a lot of sites, blogs and
tutorials for bring compatibility to these displays in css. But, what happens
with our old friend, the img tag? I tried to find a solution to make img tags
compatible with retina display, easily.

## USE

Import the hpdd.js in your html and add the class **hpdd** in all
images that you what make high pixel density display support.

    <html>
        <head>
            <script src="hpdd.js" type="text/javascript"></script>
        </head>
        <body>
            <img src="photo.png" class="hpdd"/>
        </body>
    </html>

After the page load, the src attribute of the images remain like: 

    <img src="photo_@2x.png" class="hpdd"/>

- photo.png is the name assigned for the 1 pixel ratio displays or lower.
- photo_@1.5.png is the name assigned for the 1.5 pixel ratio displays.
- photo_@2.png is the name assigned for the 2 pixel ratio displays.

## EXAMPLE

[HPDD.js Example](http://magarcia.github.com/hpdd.js/example/)

## LICENSE

Copyright (c) 2012 Martin Garcia <martin@thingsofgeek.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.