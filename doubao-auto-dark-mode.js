// ==UserScript==
// @name         Doubao Auto Dark Mode
// @namespace    http://tampermonkey.net/
// @version      2025-08-13
// @description  Follow the system's dark mode
// @author       allen
// @match        https://www.doubao.com/*
// @icon         https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/logo-doubao-overflow.png
// @grant        none
// ==/UserScript==

const unsetColorTableHeader = () => {
  const styleElm = document.createElement('style');
  styleElm.innerHTML = `
    :root {
      --color-table-header: none !important;
    }
    `;
  document.head.append(styleElm);
}

(function () {
  'use strict';

  // 用于标记是否是内部调用
  let isInternalCall = false;

  // 保存原始的setAttribute方法
  const originalSetAttribute = HTMLElement.prototype.setAttribute;

  // 重写setAttribute方法
  HTMLElement.prototype.setAttribute = function (name, value) {
    // 只拦截data-theme属性的设置
    if (name === 'data-theme') {
      // 只有内部调用才允许设置
      if (!isInternalCall) {
        // 外部调用，拒绝执行并控制台提示
        console.warn('阻止外部脚本修改data-theme属性');
        return;
      }
    }

    // 执行原始方法
    return originalSetAttribute.call(this, name, value);
  };

  // 内部使用的设置属性方法
  function internalSetAttribute(element, name, value) {
    isInternalCall = true;
    element.setAttribute(name, value);
    isInternalCall = false;
  }

  // 更新data-theme属性值（内部使用）
  function updateDataTheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    internalSetAttribute(document.documentElement, 'data-theme', isDarkMode ? 'dark' : 'light');
  }

  // 检查并修正data-theme值
  function validateDataTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const validThemes = ['dark', 'light'];

    if (!validThemes.includes(currentTheme)) {
      // 值不合法，重新根据系统主题设置
      updateDataTheme();
    }
  }

  // 初始化
  updateDataTheme();
  unsetColorTableHeader();

  // 监听系统主题变化
  const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  themeMediaQuery.addEventListener('change', updateDataTheme);

  // 监听data-theme属性变化（通过其他方式修改的情况）
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'data-theme') {
        validateDataTheme();
      }
    });
  });

  // 配置观察器
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });

  // 页面卸载时恢复原始方法
  window.addEventListener('unload', () => {
    HTMLElement.prototype.setAttribute = originalSetAttribute;
  });
})();