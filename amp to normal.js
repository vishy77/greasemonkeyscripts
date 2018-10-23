// ==UserScript==
// @name         Redirect AMP pages to normal pages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect AMP pages to normal pages
// @author       vishy77
// @include      *.cdn.ampproject.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
  var url= document.location.href;
document.location ="https://"+url.split(".cdn.ampproject.org/v/s/")[1].split("?facet=amp")[0];

})();
