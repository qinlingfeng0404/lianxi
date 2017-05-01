function text_01(){
    var box_main=document.getElementsByClassName("box_main")[0];
    var main_right=document.getElementsByClassName("right")[0];
    var main_left=document.getElementsByClassName("left")[0];
    var main_ul=box_main.getElementsByTagName("ul")[0];
    var main_li=main_ul.getElementsByTagName("li");

    main_ul.innerHTML=main_ul.innerHTML+main_ul.innerHTML;

    main_ul.style.width=main_li[0].offsetWidth*main_li.length+"px";

    var speed=2;

    main_left.onclick=function(){
        speed=-2;
    }
    main_right.onclick=function(){
        speed=2;
    }

    function move(){
        if(main_ul.offsetLeft<-main_ul.offsetWidth/2){
            main_ul.style.left="0";
        }
        if(main_ul.offsetLeft>0){
            main_ul.style.left=-main_ul.offsetWidth/2+"px";
        }
        main_ul.style.left=main_ul.offsetLeft-speed+"px";
    }

    var timer=setInterval(move,30);

    box_main.onmouseover=function(){
        clearInterval(timer);
    }
    box_main.onmouseout=function(){
        timer=setInterval(move,30);
    }
}
text_01();
function text_02(){
    var box_nav=document.getElementsByClassName("box_nav")[0];
    var main_top=document.getElementsByClassName("top")[0];
    var main_bottom=document.getElementsByClassName("bottom")[0];
    var nav_ul=box_nav.getElementsByTagName("ul")[0];
    var nav_li=nav_ul.getElementsByTagName("li");

    nav_ul.innerHTML=nav_ul.innerHTML+nav_ul.innerHTML;

    nav_ul.style.height=nav_li[0].offsetHeight*nav_li.length+"px";

    var speed=2;

    main_bottom.onclick=function(){
        speed=-2;
    }
    main_top.onclick=function(){
        speed=2;
    }

    function move(){
        if(nav_ul.offsetTop<-nav_ul.offsetHeight/2){
            nav_ul.style.top="0";
        }
        if(nav_ul.offsetTop>0){
            nav_ul.style.top=-nav_ul.offsetHeight/2+"px";
        }
        nav_ul.style.top=nav_ul.offsetTop-speed+"px";
    }

    var ti=setInterval(move,30);

    box_nav.onmouseover=function(){
        clearInterval(ti);
    }
    box_nav.onmouseout=function(){
        ti=setInterval(move,30);
    }
}
text_02();