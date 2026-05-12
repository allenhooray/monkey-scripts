// ==UserScript==
// @name         测试脚本 5 - 控制台日志
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  记录页面信息到控制台
// @author       Test
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('测试脚本 5 已加载');
    console.log('页面 URL:', window.location.href);
    console.log('页面标题:', document.title);
})();
