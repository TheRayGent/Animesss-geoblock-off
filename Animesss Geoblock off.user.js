// ==UserScript==
// @name         Animesss Geoblock off
// @match        https://animesss.com/aniserials/video/*
// @match        https://animesss.tv/aniserials/video/*
// @match        https://animesss.com/ova/*
// @match        https://animesss.tv/ova/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=animesss.com
// @version      0.3.0
// ==/UserScript==

(function() {
    'use strict';

    function geoblock_off() {
        const player = document.getElementById('player');
        const list = document.getElementById('translators-list');

        if (player) {
            player.innerHTML = player.innerHTML.replace(/geoblock=/g, '');
        }
        if (list) {
            list.innerHTML = list.innerHTML.replace(/geoblock=/g, '');
        }
    }

    geoblock_off();
    setTimeout(geoblock_off, 1500);
})();
