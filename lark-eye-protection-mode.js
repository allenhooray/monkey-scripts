// ==UserScript==
// @name         飞书文档护眼模式
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在飞书中上使用护眼模式
// @author       Your Name
// @match        https://bytedance.larkoffice.com/wiki/*
// @icon         https://lf-package-cn.feishucdn.com/obj/feishu-static/ccm-vmok/web/feishu.ico
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // 添加等宽字体样式
    GM_addStyle(`
        :root {
          --bg-body: #FFF2E2 !important;
          --bg-body-overlay: #FEFFE2 !important;
        }
    `);
})();
