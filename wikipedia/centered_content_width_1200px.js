// ==UserScript==
// @name         Width=1200px, center
// @namespace    http://tampermonkey.net/
// @version      2024-05-25
// @description  Centered content with width=1200px, so you won't break your neck with an ultrawide monitor
// @author       @Alexoner
// @match        https://en.wikipedia.org/wiki/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var contentDiv = document.querySelector("#content");
    contentDiv.style.width = "1200px";
    contentDiv.style.margin = "auto";
})();