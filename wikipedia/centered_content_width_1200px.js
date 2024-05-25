// ==UserScript==
// @name         Width=1200px, center
// @namespace    http://tampermonkey.net/
// @version      2024-05-25
// @description  Centered content with width=1200px, so you won't break your neck with an ultrawide monitor
// @author       @Alexoner
// @match        https://en.wikipedia.org/wiki/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org
// @homepage     https://raw.githubusercontent.com/Alexoner/monkeys/main/wikipedia
// @downloadURL  https://raw.githubusercontent.com/Alexoner/monkeys/main/wikipedia/centered_content_width_1200px.js
// @updateURL    https://raw.githubusercontent.com/Alexoner/monkeys/main/wikipedia/centered_content_width_1200px.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var contentDiv = document.querySelector("#content");
    contentDiv.style.width = "1200px";
    contentDiv.style.margin = "auto";
})();