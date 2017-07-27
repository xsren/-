// ==UserScript==
// @name         baidu_news
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://news.baidu.com/*
// @grant        none
// ==/UserScript==

// 这是一个测试脚本
// 访问 http://news.baidu.com/ns?word=nba&pn=20&cl=2&ct=1&tn=news&rn=20&ie=utf-8&bt=0&et=0，开启该脚本
// 之后会每5s打开第一条新闻和翻页
(function() {
    'use strict';


    // Your code here...

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }

    document.querySelector("h3.c-title a").click();
    console.log('11111');
    sleep(5000);

    document.querySelector("#page > a:nth-child(12)").click();


})();