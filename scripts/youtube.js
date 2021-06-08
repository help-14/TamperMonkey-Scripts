// ==UserScript==
// @name         Youtube
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Go to theater mode automatically
// @author       Help-14
// @match        *://www.youtube.com/watch?v=*
// @updateURL    https://raw.githubusercontent.com/help-14/TamperMonkey-Scripts/main/scripts/youtube.js
// @downloadURL  https://raw.githubusercontent.com/help-14/TamperMonkey-Scripts/main/scripts/youtube.js
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function selectTheaterMode(){
        var theaterButton = document.querySelector('button[title="Theater mode (t)"]');
        if(theaterButton) {
            theaterButton.click();
        } else {
            setTimeout(() => { selectTheaterMode(); }, 1000);
        }
    }

    window.addEventListener('load', function () {
        selectTheaterMode();
    });
})();
