/**
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


HPDD.js (High Pixel Density Display) is a solution to make IMG tags compatible
with retina display, easily.

@preserve @version 0.0.1
@url http://magarcia.github.com/hddp.js
*/

(function(window, undefined) {
    document = window.document;

    // Make HPDD object
    var HPDD = {};
    HPDD.ready = false;
    HPDD.dpr = undefined;

    // Get device pixel ratio
    if (window.devicePixelRatio !== undefined ) {
        if ( window.devicePixelRatio > 1 ) {
            HPDD.dpr = 1.5;
        }
        if ( window.devicePixelRatio > 1.5 ) {
            HPDD.dpr = 2;
        }
    }

    HPDD.run = function(classname) {
        if ( ( HPDD.dpr !== undefined ) && ( HPDD.dpr > 1) ) {

            if ( classname === undefined ) classname = 'hpdd';

            // Find img tags with class hpdd
            if ( HPDD.dpr ) {
                var node = document.getElementsByTagName("body")[0];
                var a = [];
                var i, j;
                var re = new RegExp('\\b' + classname + '\\b');
                var els = node.getElementsByTagName("img");

                for ( i=0,j=els.length; i<j; i++ )
                    if(re.test(els[i].className))a.push(els[i]);

                // Rename src of img tags to hpdd name
                for ( i=0,j=a.length; i<j; i++ ) {
                    var src = a[i].getAttribute('src');
                    var ext = /(\.\w+)$/.exec(src)[0];
                    a[i].setAttribute('src', src.replace(ext, '_@' + HPDD.dpr + 'x' + ext));
                }
            }
        }
        HPDD.ready = true;
    };

    // Run when page load
    // Mozilla, Opera and webkit nightlies currently support this event
    if ( document.addEventListener ) {
        // Use the handy event callback
        document.addEventListener( "DOMContentLoaded", function(){
                document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
                HPDD.run();
        }, false );

    // If IE event model is used
    } else if ( document.attachEvent ) {
        // ensure firing before onload,
        // maybe late but safe also for iframes
        document.attachEvent("onreadystatechange", function(){
                if ( document.readyState === "complete" ) {
                        document.detachEvent( "onreadystatechange", arguments.callee );
                        HPDD.run();
                }
        });

        // If IE and not an iframe
        // continually check to see if the document is ready
        if ( document.documentElement.doScroll && window == window.top ) (function(){
                if ( HPDD.ready ) return;

                try {
                        // If IE is used, use the trick by Diego Perini
                        // http://javascript.nwbox.com/IEContentLoaded/
                        document.documentElement.doScroll("left");
                } catch( error ) {
                        setTimeout( arguments.callee, 0 );
                        return;
                }

                // and execute any waiting functions
                HPDD.run();
        })();
    }

    window.HPDD = HPDD;
})(this);