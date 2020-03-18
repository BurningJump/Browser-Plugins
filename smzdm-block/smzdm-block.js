// ==UserScript==
// @name         什么值得买屏蔽内容
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.smzdm.com/
// @match        *://www.smzdm.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  var btn = document.createElement('BUTTON');
  btn.style.cssText = 'position:fixed;bottom:10px;right:10px;width:300px;height:300px;color:yellow;cursor:pointer;font-size:40px;z-index:9999;border-radius: 8px;'
  btn.innerText = '点击屏蔽内容';
  document.body.prepend(btn);
  var input = document.createElement('input');
  var inputDiv = document.createElement('div');
  var inputLabel = document.createElement('label');
  var inputBtn = document.createElement('button');
  inputDiv.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;';
  input.style.cssText = 'width:200px;height:40px;';
  inputLabel.textContent = '屏蔽关键字';
  inputBtn.textContent = '确定';
  input.placeholder = '请输入关键字';
  inputDiv.append(inputLabel);
  inputLabel.append(input);
  inputDiv.append(inputBtn)
  document.body.prepend(inputDiv);
  var rep = /ryzen|ddr4 2133|aoc|声卡|京天|雷霆世纪|复古*游戏主机|带鱼屏|水星|软壳|宏碁|Acer|英菲克|世纪曙光|灵耀|耳塞|realme|缘诺亿|iPhone X[R]*|组装台式机|SD卡|2080ti|2080 Ti|1660|名龙堂|组装电脑|8Gx2|EDC|IQOO|1650|宾得|RX590|RX 590|RX580|RX 580|台式机内存[条]* 8G[B]*|8G[B]* 台式机内存[条]*|8G[B]*x2|DDR4 3200 8G[B]*|DDR4 3000 8G[B]*|DDR4 2666 8G[B]*|DDR4 2400 8G[B]*|8G[B]* DDR4 3200|8G[B]* DDR4 3000|8G[B]* DDR4 2666|8G[B]* DDR4 2400|Switch|8G[B]*×2|iPhone XS|台式组装电脑|炫龙|iPad|机械师|爱国者|华硕灵耀|Xperia|飞行堡垒|未来人类|灵越飞匣|神舟|机械革命|redmi|红魔|黑鲨|红米|surface|雷神|ddr4 2400|iphone 7|iphone 8|投影仪|游戏直播|采集卡|rx570|rx560|2048sp|galaxy|i5-8|1050ti|移动硬盘|移动固态硬盘|奥林巴斯|富士|AMD|JBL|佳能|cannon|儿童|显示器|牙刷|台电|耳机|朗科|游匣|游戏台式机|电脑主机|台式主机|洗衣机|液晶电视|坐便器|床垫|空调|米家|大疆|夏普|松下|自拍杆|数据线|360|扬声器|鞋|努比亚|nubia|鼠标垫|kindle|电子书|电纸书|美图|麦克风|LG|散热器|存储卡|诺基亚|小米|魅族|华为|荣耀|锤子|坚果|中兴|联想|OPPO|VIVO|音箱|机箱|微单|手表|播放器|主板|手环|电源|一加|HP|惠普|一体机|游戏本|有源|HTC|游戏笔记本|马桶|黑莓|读卡器/i;
  btn.onclick = function () {
    window.localStorage.uuu = 'yuuuuu'
    var ul = document.getElementById('follow-list');
    var li = ul.childNodes;
    for (let i = 3, len = li.length; i < len; i++) {
      let node = li[i].childNodes[0].childNodes[0].innerHTML;
      if (!node) break;
      if (rep.test(node)) {
        ul.removeChild(li[i]);
        i--;
      } else if (/扫地机器人/.test(node) && !/小米|米家|科沃斯|戴森|Dyson/.test(node)) {
        ul.removeChild(li[i]);
        i--;
      }
    }
  }
})();