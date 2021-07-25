// ==UserScript==
// @name         Cmanga
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Sort comic by newest.
// @author       Help-14
// @match        *://cmangavip.com/*
// @icon         https://www.google.com/s2/favicons?domain=cmanga.com
// @updateURL    https://raw.githubusercontent.com/help-14/TamperMonkey-Scripts/main/scripts/cmanga.js
// @downloadURL  https://raw.githubusercontent.com/help-14/TamperMonkey-Scripts/main/scripts/cmanga.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function selectDropDown(){
        var dropdown = document.querySelector('select[onchange="update_sort(this)"]');
        if(dropdown) {
            dropdown.selectedIndex=1;
            update_sort(dropdown);
        } else {
            setTimeout(() => { selectDropDown(); }, 1000);
        }
        var volumeButton = document.querySelector('#volume_chat.active');
        if(volumeButton) volumeButton.click()
    }

    window.addEventListener('load', function () {
        selectDropDown();
    });

})();
