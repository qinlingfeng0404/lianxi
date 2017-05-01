var m=5;
var timer=null;
/*
第一种
 */
/*function open2(){
    var box_list=document.getElementsByClassName("box_list")[0];
    box_list.innerHTML=m+" 秒后跳回原来的页面";
    m--;
    if(m>=0){
        timer=setTimeout("open2()",1000);
    }else{
        history.back();
    }
}
open2();*/
/*
第二种
 */
function open2(){
    var box_list=document.getElementsByClassName("box_list")[0];
    box_list.innerHTML=m+" 秒后跳回原来的页面";
    m--;
    if(m<=0){
        history.back();
    }
}
open2();
timer=setInterval("open2()",1000)
function text(){
    clearTimeout(timer);
}