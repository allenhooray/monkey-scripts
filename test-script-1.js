// ==UserScript==
// @name         测试脚本 1 - 页面时间显示
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  在页面右上角显示当前时间
// @author       Test
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const div = document.createElement('div');
    div.style.cssText = 'position:fixed;top:10px;right:10px;background:#333;color:#fff;padding:10px;border-radius:5px;z-index:9999;';
    document.body.appendChild(div);
    setInterval(() => {
        div.textContent = new Date().toLocaleTimeString();
    }, 1000);
})();
