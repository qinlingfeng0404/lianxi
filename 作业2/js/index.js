/*
作业一
 */
function text_01(){
    var box=document.getElementsByClassName("box")[0];
    var box1=document.getElementsByClassName("box")[1];
    var box_p=box1.getElementsByTagName("p")[0];
    var box_pi=box_p.getElementsByTagName("i")[0];
    var i=1;
    box_p.onclick=function(){
        i++;
        if(i%2==0){
            box1.style.left="150px";
            box_pi.style.transform="rotate(180deg)";
        }else{
            box1.style.left="0px";
            box_pi.style.transform="rotate(360deg)";
        }
    }
}
text_01();
/*
作业二
 */
function text_02(){
    var main_div=document.getElementsByClassName("main_div")[0];
    var fO=document.getElementById("main_div_form");
    var In=fO.getElementsByTagName("input")[0];
    var In1=fO.getElementsByTagName("input")[1];
    var In2=fO.getElementsByTagName("input")[2];


    In2.onclick=function(){
        var a =In.value.toString();
        var b =In1.value.toString();
        main_div.style[a]=b;
    }
}
text_02();
/*
作业三
 */
function text_03(){
    var sC=document.getElementsByClassName("sc");
    for(i=0;i<sC.length;i++){
        sC[i].index=i;
        sC[i].onclick=function(){
            var tR=this.parentNode.parentNode;
            tR.parentNode.removeChild(tR);
        }
    }

}
text_03();
/*
作业四
 */
function text_04(){
    var lS=document.getElementsByClassName("box_ls")[0];
    var ls_p=lS.getElementsByTagName("p");
    var ls_i=document.getElementsByClassName("ls_i");
    var ls_ul=lS.getElementsByTagName("ul");

    var num=1;
    for(i=0;i<ls_p.length;i++){
        ls_p[i].index=i;
        ls_p[i].onclick=function(){
            num++;
            if(num%2==0){
                ls_ul[this.index].style.display="block";
                this.style.backgroundColor="#FFFF00";
                ls_i[this.index].style.transform="rotate(90deg)";
            }else{
                ls_ul[this.index].style.display="none";
                this.style.backgroundColor="#7EFF00";
                ls_i[this.index].style.transform="rotate(0deg)";
            }
        }
    }
}
text_04();