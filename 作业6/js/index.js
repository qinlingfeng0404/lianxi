/*function text_01(){
    var box_main=document.getElementsByClassName("box_main")[0];
    var main_p=document.getElementById("main_p");
    box_main.style.display="block";
    main_p.onclick=function(){
        box_main.style.display="none";
    }
}
var t=setTimeout(text_01,5000);

document.onclick=function(){
    clearTimeout(t);
}*/
/*
Timeout
第一种定时器
 */
var i=1;
/*var ti=null;
function kaishi(){
    var main=document.getElementsByClassName("main")[0];
    main.innerHTML=main.innerHTML+" "+(i++).toString();
        ti=setTimeout(kaishi(),2000);
}
function jieshu(){
    clearTimeout(ti);
}*/
/*
Interval
第二种定时器
 */
function ks(){
    var main=document.getElementsByClassName("main")[0];
    main.innerHTML=main.innerHTML+" "+(i++).toString();
}
function js(){
    clearInterval(tie);
}
/*
转换
 */
function open1(){
    window.open("index1.html","_self");
}