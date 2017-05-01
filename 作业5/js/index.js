function text_01(){
    var btn=document.getElementById("btn");
    var btn1=document.getElementById("btn1");
    var btn_p=document.getElementsByTagName("p")[0];
    var btn_p1=document.getElementsByTagName("p")[1];
    btn.onclick=function(){
        var b=confirm("你喜欢javaScript吗?");
        if(b==true){
            btn_p.innerText="喜欢就对了";
        }else{
            btn_p.innerText="你可以尝试着喜欢";
        }
    }
    btn1.onclick=function(){
        var age=prompt("请输入你的年龄？");
        if(age==""){
            alert("请输入你的年龄？");
        }else{
            if(age<18){
                btn_p1.innerText="你的年龄太小";
            }else if(age<30){
                btn_p1.innerText="你的年龄很年轻";
            }else if(age<60){
                btn_p1.innerText="您的年龄有点老";
            }else{
                btn_p1.innerText="不好意思你超出了我们的范围";
            }
        }
    }
}
text_01();
function open1(){
    window.open("../作业1/index.html","_self");
}
function open2(){
    history.forward();
}
function text_02(){
    var btn2=document.getElementById("btn2");
    var btn3=document.getElementById("btn3");
    var te=document.getElementById("te");
    var xin;
    btn2.onclick=function(){
        xin=window.open("about:blank","_blnak","width:20;height:20;top:100;left:100;");
        xin.document.write(te.value);
    }
    btn3.onclick=function(){
        xin.close();
    }
}
text_02();