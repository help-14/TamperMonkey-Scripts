// ==UserScript==
// @name         Vcomic
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Help-14
// @match        vcomic.net
// @icon         https://www.google.com/s2/favicons?domain=vcomic.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var canRunAds = true;
    window.addEventListener('load', function () {
        var closeButton = document.querySelector('button[data-dismiss="modal"]');
        if(closeButton) closeButton.click();
    });
})();
