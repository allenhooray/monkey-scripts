// ==UserScript==
// @name         测试脚本 6 - 社交网站快捷按钮
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  显示快捷按钮
// @author       Test
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const btn = document.createElement('button');
    btn.textContent = '快捷按钮';
    btn.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:9999;';
    btn.onclick = () => alert('测试脚本 6 运行中！');
    document.body.appendChild(btn);
})();
