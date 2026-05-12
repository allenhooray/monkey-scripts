// ==UserScript==
// @name         测试脚本 3 - 页面标题修改器
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  在页面标题前添加 [已修改]
// @author       Test
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.title = '[已修改] ' + document.title;
})();
