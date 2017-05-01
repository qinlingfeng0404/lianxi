/*
作业一
 */
function Mysort1(){
    document.getElementById("span1").innerHTML="4";
    document.getElementById("span2").innerHTML="3";
}
function Mysort2(){
    var span = document.getElementsByClassName("span");
    span[0].innerHTML="4";
    span[1].innerHTML="3";
}
/*
作业二
 */
function xia01(){
    document.getElementById("chengshi").style.display="block";
}
function xia02(){
    document.getElementById("chengshi").style.display="none";
}
/*
作业三
 */
function text_01(){
    for(i=1;i<=9;i++){
        for(ii=1;ii<=i;ii++){
            document.write(i+"*"+ii+"="+(i*ii)+"&nbsp;&nbsp;&nbsp;&nbsp;")
        }
        document.write("<br/>");
    }
}
text_01();
function text_02(){
    for(i=1;i<=9;i++){
        for(ii=9;ii>=i;ii--){
            document.write(i+"*"+ii+"="+(i*ii)+"&nbsp;&nbsp;&nbsp;&nbsp;")
        }
        document.write("<br/>");
    }
}
text_02();
/*
作业四
 */
function text_03(){
    for(i=1;i<=100;i++){
        if(i%2==0){
            document.write("偶数:"+i+"<br/>");
        }else{
            document.write("奇数"+i+"&nbsp;")
        }
    }
}
text_03();
/*
作业五
 */
function text_041(){
    var shuru = document.getElementById("shuru").value;
    var i = parseInt(shuru);
    if(i<60){
        alert("你不及格");
    }else if(i>=60&&i<70){
        alert("你还需要努力");
    }else if(i>=70&&i<80){
        alert("你在努把力");
    }else if(i>=80&&i<90){
        alert("你做的很好");
    }else if(i>=90&&i<=100){
        alert("稳");
    }else{
        alert("你的输入有误");
    }
}
function text_042(){
        var sr = document.getElementById("sr").value;
        var i = parseInt(sr);
        switch(i) {
        case 1:
            alert("土豆炖牛肉");
        break;
        case 2:
            alert("牛肉炖土豆");
        break;
        case 3:
            alert("牛肉炖柿子");
        break;
        case 4:
            alert("柿子炖牛肉");
        break;
        case 5:
            alert("牛肉炖萝卜");
        break;
        case 6:
            alert("休息");
        break;
        case 7:
            alert("休息");
        break;
        default:
        alert("你的输入有误");
    }
}
function text_05(num){
    for(i=1;i<=5;i++){
        var box_pi="box_p"+i;
        var box_imgi="box_img"+i;
        document.getElementById(box_pi).className="";
        document.getElementById(box_imgi).style.display="none";
    }
    var box_pnum="box_p"+num;
    var box_imgnum="box_img"+num;
    document.getElementById(box_pnum).className="box_p";
    document.getElementById(box_imgnum).style.display="block";
}
function text_06(){
    document.getElementById("box1_content").style.display="block";
}
function text_07(num){
    if(num==1){
        document.getElementById("box1_main").style.backgroundColor="red";
    }else if(num==2){
        document.getElementById("box1_main").style.backgroundColor="yellow";
    }else if(num==3){
        document.getElementById("box1_main").style.backgroundColor="blue";
    }else if(num==4){
        document.getElementById("box1_main").style.width="200px";
    }else if(num==5){
        document.getElementById("box1_main").style.width="300px";
    }else if(num==6){
        document.getElementById("box1_main").style.width="400px";
    }else if(num==7){
        document.getElementById("box1_main").style.height="200px";
    }else if(num==8){
        document.getElementById("box1_main").style.height="300px";
    }else{
        document.getElementById("box1_main").style.height="400px";
    }
}
function text_10(num){
    if(num==1){
        var box1_main = document.getElementById("box1_main");
        box1_main.style.backgroundColor="#FFF";
        box1_main.style.width="100px";
        box1_main.style.height="100px";
        box1_main.style.border="2px solid #CCC";
        document.getElementById("box1_content").style.display="none";
    }else{
        document.getElementById("box1_content").style.display="none";
    }
}
function text_20(){
    document.getElementById("test-p").style.backgroundColor="red";
    var div1=document.getElementsByClassName("c-green")[0];
    var p1=div1.getElementsByTagName("p");
    for(i=0;i<p1.length;i++){
        p1[i].style.backgroundColor="red";
    }
    var div2=document.getElementsByClassName("c-green")[1];
    var p2=div2.getElementsByTagName("p");
    p2[1].style.backgroundColor="red";
}
text_20();
function text_21(){
    var sc = document.getElementById("shangchu");
    var li = sc.getElementsByTagName("li");
    sc.removeChild(sc.childNodes[0]);
}
text_21();