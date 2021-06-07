// ==UserScript==
// @name         Youtube
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Go to theater mode automatically
// @author       Help-14
// @match        *://*.youtube.com/watch?v=*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.addEventListener('load', function () {
        var theaterButton = document.querySelector('button[title="Theater mode (t)"]');
        if(theaterButton) theaterButton.click();
    });
})();
