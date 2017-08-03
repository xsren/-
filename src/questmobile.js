// ==UserScript==
// @name         questmobile
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://data.questmobile.com.cn/*
// @grant        none
// ==/UserScript==
// 自动下载表格然后翻页

(function() {
    'use strict';

    // Your code here...
    var i = 1;
    var limit=10000;
    function do_job()
    {
        if (i > limit) {
            alert("到达了设置上限,当前值："+i);
        } else {

            var next = document.querySelector("#pager > li > a[class='next']");

            if (next) {
                console.log(i);
                setTimeout(function() { console.log("downlod...");
                                       document.querySelector("#exportExcel").click();
                                      }, 5000);
                setTimeout(function() { console.log("next...");
                                       next.click();
                                      }, 6000);
                i += 1;
            } else {
                alert("翻到了最后一页："+i);
            }



        }

    }

    setInterval(do_job, 10000);

})();