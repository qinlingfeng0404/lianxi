function text_01(){
    var sc=document.getElementById("sc");
    var kaishi=document.getElementById("kaishi");
    var chongzhi=document.getElementById("chongzhi");
    var j=0;
    var timer=null;
    kaishi.onclick=function(){
        if(kaishi.value=="开始"){
            function sj(){
                sc.value=(j++)/100;
                /*timer=setTimeout(sj,10);*/
            }
            sj();
            timer=setInterval(sj,10);
            kaishi.value="结束";
            chongzhi.disabled=false;
        }else{
            /*clearTimeout(timer);*/
            clearInterval(timer);
            kaishi.value="开始";
            chongzhi.disabled=true;
        }
    }
    chongzhi.onclick=function(){
        /*clearTimeout(timer);*/
        clearInterval(timer);
        kaishi.value="开始";
        j=0;
        sc.value=0;
        chongzhi.disabled=true;
    }
}
text_01();
function text_02(){
    var main_m=document.getElementsByClassName("main_m")[0];
    var main_s=document.getElementsByClassName("main_s")[0];
    var main_h=document.getElementsByClassName("main_h")[0];

    var shijian=new Date();
    var h=shijian.getHours();
    var s=shijian.getMinutes();
    var m=shijian.getSeconds();

    if(h>=12){
        h-=12;
    }

    var hDa=(h*3600+s*60+m)/(3600*12)*360;
    var sDa=(s*60+m)/3600*360;
    var mDa=m/60*360;

    main_h.style.transform="rotate("+hDa+"deg)";
    main_s.style.transform="rotate("+sDa+"deg)";
    main_m.style.transform="rotate("+mDa+"deg)";
    
}
text_02();
setInterval(text_02,1000);
console.log(window.outerWidth);
console.log(window.innerWidth);
console.log(window.outerHeight);
console.log(window.innerHeight);

console.log(window.screen.availWidth);
console.log(window.screen.availHeight);
console.log(window.screen.width);
console.log(window.screen.height);

console.log(document.body.clientWidth);
console.log(document.body.clientHeight);
console.log(document.body.offsetWidth);
console.log(document.body.offsetHeight);

function text_03(){
    var main_box=document.getElementsByClassName("main_box")[0];
    main_box.onmousedown=function(ev){
        console.log("ev.screenX:"+ev.screenX);
        console.log("ev.screenY:"+ev.screenY);
        console.log("ev.clientX:"+ev.clientX);
        console.log("ev.clientY:"+ev.clientY);
        console.log("ev.x:"+ev.x);
        console.log("ev.y:"+ev.y);
        console.log("ev.pageX:"+ev.pageX);
        console.log("ev.pageY:"+ev.pageY);
        console.log("offsetX:"+ev.offsetX);
        console.log("offsetY:"+ev.offsetY);
        console.log("ev.layerX:"+ev.layerX);
        console.log("ev.layerY:"+ev.layerY);
    }
}
text_03();