// ==UserScript==
// @name         飞书文档等宽字体
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在网站上使用等宽字体显示文本内容
// @author       Your Name
// @match        https://bytedance.larkoffice.com/wiki/*
// @icon         https://lf-package-cn.feishucdn.com/obj/feishu-static/ccm-vmok/web/feishu.ico
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  // 添加等宽字体样式
  GM_addStyle(`
        .ud__lang-zh body, .ud__lang-zh button, .ud__lang-zh input, .ud__lang-zh optgroup, .ud__lang-zh select, .ud__lang-zh textarea, body, body.ud__lang-zh, button, button.ud__lang-zh, input, input.ud__lang-zh, optgroup, optgroup.ud__lang-zh, select, select.ud__lang-zh, textarea, textarea.ud__lang-zh {
          font-family: monospace, Monaco, Consolas, "Lucida Console" !important;
        }
    `);
})();
