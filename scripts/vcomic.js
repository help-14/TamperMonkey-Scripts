// ==UserScript==
// @name         Vcomic
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Hide "please disable adblock" popup
// @author       Help-14
// @match        *://vcomic.net/*
// @match        *://truyen86.com/*
// @updateURL    https://raw.githubusercontent.com/help-14/TamperMonkey-Scripts/main/scripts/vcomic.js
// @downloadURL  https://raw.githubusercontent.com/help-14/TamperMonkey-Scripts/main/scripts/vcomic.js
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
