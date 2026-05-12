// ==UserScript==
// @name         测试脚本 2 - 背景变色
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  点击页面背景随机变色
// @author       Test
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.addEventListener('click', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
})();
