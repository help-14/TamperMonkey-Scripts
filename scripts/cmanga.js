// ==UserScript==
// @name         Cmanga
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Help-14
// @match        cmanga.com
// @icon         https://www.google.com/s2/favicons?domain=cmanga.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.addEventListener('load', function () {
        document.querySelector('select[onchange="update_sort(this)"]').selectedIndex=1;
        update_sort(document.querySelector('select[onchange="update_sort(this)"]'));
    });
})();
