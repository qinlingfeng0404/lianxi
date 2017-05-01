function text_01(){
    var sr = document.getElementById("sr");
    if(sr.value==""){
        alert("请输入内容");
    }else{
        var oUl = document.getElementById("ul");
        var Li =oUl.getElementsByTagName("li");
        var ulLi= document.createElement("li");
        // var span=document.createElement("span");
        // span.setAttribute("class", "span");
        // span.setAttribute("onclick", "text_02()")
        ulLi.innerHTML=sr.value+"<span class='span' onclick='text_02()'>删除</span>";
        oUl.insertBefore(ulLi,Li[0]);
        sr.value="";
    }

   
}



 function text_02(){
    var oUl= document.getElementById("ul");
    var oSpan = document.getElementsByTagName("span");
    for(i=0;i<oSpan.length;i++){
        oSpan[i].onclick=function(){
            oUl.removeChild(this.parentNode);
        }
    }
}

function text_03(){
    var box=document.getElementsByClassName("box")[0];
    var img=box.getElementsByTagName("img");
    var box_p=document.getElementsByClassName("box_p")[0];
    var box_pp=box_p.getElementsByTagName("p");
    var L=document.getElementsByClassName("left")[0];
    var R=document.getElementsByClassName("right")[0];
    var num=0;
   for(i=0;i<box_pp.length;i++){
        box_pp[i].index=i;
        box_pp[i].onmousemove=function(){
            for(i=0;i<box_pp.length;i++){
                box_pp[i].className="";
                img[i].style.display="none";
            }
            this.className="box_pp";
            img[this.index].style.display="block";
            num=this.index;
        }
        R.onclick=function(){
            for(i=0;i<box_pp.length;i++){
                box_pp[i].className="";
                img[i].style.display="none";
            }
            num++;
            if(num>box_pp.length-1){
                num=0;
            }
            box_pp[num].className="box_pp";
            img[num].style.display="block";
        }
        L.onclick=function(){
            for(i=0;i<box_pp.length;i++){
                box_pp[i].className="";
                img[i].style.display="none";
            }
            num--;
            if(num==-1){
                num=box_pp.length-1;
            }
            box_pp[num].className="box_pp";
            img[num].style.display="block";
        }
    }
}
text_03();
function text_04(){
    var main_div=document.getElementsByClassName("box_main_div")[0];
    var main=document.getElementsByClassName("box_main")[0];
    var main_p=main.getElementsByTagName("p")[0];

/*    var i=1;
    main_div.onclick=function(){
        i++;
        if(i%2==0){
            main_div.style.right="100px";
            main_div.style.border="1px solid #CCC";
            main.style.backgroundColor="#FFF";
            main_p.style.color="#CCC";
            main_p.style.marginLeft="104px";
            main_p.innerText="OFF";
        }else{
            main_div.style.right="2px";
            main.style.backgroundColor="#32C732";
            main_p.style.color="#FFF";
            main_p.style.marginLeft="20px";
            main_p.innerText="ON";
        }
    }*/
    var i=true;
    main_div.onclick=function(){
        if(i==true){
            main_div.style.right="100px";
            main_div.style.border="1px solid #CCC";
            main.style.backgroundColor="#FFF";
            main_p.style.color="#CCC";
            main_p.style.marginLeft="104px";
            main_p.innerText="OFF";
            i=false;
        }else{
            main_div.style.right="2px";
            main.style.backgroundColor="#32C732";
            main_p.style.color="#FFF";
            main_p.style.marginLeft="20px";
            main_p.innerText="ON";
            i=true;
        }
    }
}
text_04();
function text_05(){
/*   var box_form=document.getElementById("box_form");
   var In=box_form.getElementsByTagName("input")[0];
   var In1=box_form.getElementsByTagName("input")[1];
   var In2=box_form.getElementsByTagName("input")[2];

   var Da=document.getElementById("da");

   var se=document.getElementById("Se").selectedIndex;
   var Op=document.getElementsByTagName("option");
   for(i=0;i<Op.length;i++){
        Op[i].onclick=function(){
            for(i=0;i<Op.length;i++){
                Op[i].value="";   
            }
            this.value=this.text;
            if(this.value=="+"){
                Da.onclick=function(){
                    In2.value=parseFloat(In.value)+parseFloat(In1.value);
                    In.value="";
                    In1.value="";
                }
            }else if(this.value=="-"){
                Da.onclick=function(){
                    In2.value=parseFloat(In.value)-parseFloat(In1.value);
                    In.value="";
                    In1.value="";
                }
            }else if(this.value=="*"){
                Da.onclick=function(){
                    In2.value=parseFloat(In.value)*parseFloat(In1.value);
                    In.value="";
                    In1.value="";
                }
            }else if(this.value=="/"){
                Da.onclick=function(){
                    In2.value=parseFloat(In.value)/parseFloat(In1.value);
                    In.value="";
                    In1.value="";
                }
            }
        }
   }*/
   var Fo=document.getElementById("box_form");
   var text00=Fo.getElementsByTagName("input")[0];
   var text01=Fo.getElementsByTagName("input")[1];
   var text02=Fo.getElementsByTagName("input")[2];
   var se=document.getElementById("Se");

   var Da=document.getElementById("da");
   Da.onclick=function(){
        if(se.value=="+"){
            var t00=parseFloat(text00.value);
            if(t00===parseFloat(text00.value)){
                text02.value=parseFloat(text00.value)+parseFloat(text01.value);
                text00.value="";
                text01.value="";
            }else{
                alert(1);
            }
        }
        if(se.value=="-"){
            var t00=parseFloat(text00.value);
            if(t00===parseFloat(text00.value)){
                text02.value=parseFloat(text00.value)-parseFloat(text01.value);
                text00.value="";
                text01.value="";
            }else{
                alert(1);
            }
        }
        if(se.value=="*"){
            var t00=parseFloat(text00.value);
            if(t00===parseFloat(text00.value)){
                text02.value=parseFloat(text00.value)*parseFloat(text01.value);
                text00.value="";
                text01.value="";
            }else{
                alert(1);
            }
        }
        if(se.value=="/"){
            var t00=parseFloat(text00.value);
            if(t00===parseFloat(text00.value)){
                text02.value=parseFloat(text00.value)/parseFloat(text01.value);
                text00.value="";
                text01.value="";
            }else{
                alert(1);
            }
        }
        if(se.value=="%"){
            var t00=parseFloat(text00.value);
            if(t00===parseFloat(text00.value)){
                text02.value=parseFloat(text00.value)%parseFloat(text01.value);
                text00.value="";
                text01.value="";
            }else{
                alert(1);
            }
        }
   }
}
text_05();