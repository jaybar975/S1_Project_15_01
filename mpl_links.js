"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Justin Aybar
   Date: 4.18.19 
   
   Filename: mpl_links.js

*/
window.addEventListener("load", function () {
    var allSelect = document.querySelectorAll('#govLinks select');
    for (var i = 0; i < allSelect; i++) {
        allSelect[i].addEventListener("onchange", function (e) {
            window.location.href = e.target.value;
        });
    }

})