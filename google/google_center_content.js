// ==UserScript==
// @name         Google Centered content
// @namespace    http://tampermonkey.net/
// @version      2024-05-25
// @description  try to take over the world!
// @homepage     
// @author       You
// @match        https://www.google.com/search?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // search entries
    var searchDiv = document.querySelector("#rcnt");
    searchDiv.style.margin = "auto";


    // search form
    document.querySelector("#tsf").style.margin = "auto";
    document.querySelector("#tsf > div:nth-child(1) > div.A8SBwf").style.marginLeft = "0px";

    // tab below the form
    document.querySelector("#cnt > div:nth-child(11) > div > div.xhjkHe").style.margin = "auto";

})();