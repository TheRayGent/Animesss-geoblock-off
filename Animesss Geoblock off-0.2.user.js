// ==UserScript==
// @name         Animesss Geoblock off
// @match        https://animesss.com/aniserials/video/*
// @match        https://animesss.tv/aniserials/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=animesss.com
// @version      0.2
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById('player_kodik').innerHTML = document.getElementById('player_kodik').innerHTML.replace(/geoblock=/g, '');
})();