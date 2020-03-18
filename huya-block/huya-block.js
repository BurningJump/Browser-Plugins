// ==UserScript==
// @name         虎牙清爽界面
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.huya.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // Your code here...
  var btn = document.createElement('BUTTON');
  btn.style.cssText = 'position:fixed;top:700px;right:0px;width:350px;height:350px;color:yellow;cursor:pointer;font-size:40px;z-index:999;'
  btn.innerText = '点击屏蔽内容';
  document.body.prepend(btn);
  btn.onclick = function () {
    document.querySelector('.room-core-r').remove()
    document.querySelector('.room-footer').remove()
    document.querySelector('.mod-sidebar').remove()
    document.querySelector('.player-gift-wrap').remove()
    document.querySelector('#J_roomHeader').remove()
    document.querySelector('.player-videotype-list').firstChild.click()
    document.querySelector('#player-danmu-btn').click()
    document.querySelector('#player-fullpage-btn').click()
  }
})();