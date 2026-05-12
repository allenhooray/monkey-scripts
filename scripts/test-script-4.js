// ==UserScript==
// @name         测试脚本 4 - 字体放大
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  放大页面字体
// @author       Test
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.style.fontSize = '120%';
})();
