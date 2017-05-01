function text_01(){
    var ul=document.getElementsByTagName("ul")[0];
    var ul1=document.getElementsByTagName("ul")[1];
    var box=document.getElementsByClassName("box")[0];

    console.log(ul.children);
    console.log(ul.childNodes);

    ul1.removeChild(ul1.children[1]);
    ul1.removeChild(ul1.children[2]);
    ul1.removeChild(ul1.children[3]);

/*    console.log(ul2.childNodes[0].nodeType);
    ul2.removeChild(ul2.childNodes[0]);*/


    console.log(box.childNodes);
    box.removeChild(text_02(box));

    function text_02(num){
        for(var i=0,e;e=num.childNodes[i++];){
            if(e.nodeType==3 ){
                return e;
            }
        }
    }
}
text_01();

//2222
function text_02(){
    var mu=[
        {"id":911,"name":'可口可乐',"price":2.5,"count":3000},
        {"id":110,"name":'百事可乐',"price":2.5,"count":5000},
        {"id":120,"name":'非常可乐',"price":2.5,"count":1000}
    ];

    var box_main=document.getElementsByClassName("box_main")[0];
    var tab=document.createElement("table");
    var tH=tab.createTHead();
    var tR=tH.insertRow();
    for(var key in mu[0]){
        var td=tR.insertCell().innerHTML=key;
    }
    tR.insertCell().innerHTML="operate";
    var tB=tab.createTBody();
    for(var i=0;i<mu.length;i++){
        var tR=tB.insertRow();
        for(var key in mu[i]){
            tR.insertCell().innerHTML=mu[i][key];
        }
        var sp=document.createElement("span");
        sp.innerHTML="删除";

        sp.onclick=function(){
            var tR=this.parentNode.parentNode;
            var pname=tR.cells[1].innerHTML;
            if(confirm("是否继续删除 "+pname+" ?")){
/*                var tR=this.parentNode.parentNode;
                tR.parentNode.removeChild(tR);*/
                document.querySelector("div.box_main>table").deleteRow(tR.rowIndex);
            }
        }
        tR.insertCell().appendChild(sp);
    }
    box_main.appendChild(tab);
    var V=11+"12";
    console.log(V);
    var v=11+"one";
    console.log(v);
    var s=11-"12";
    console.log(s);
    var S=11-"one";
    console.log(S);
}
text_02();