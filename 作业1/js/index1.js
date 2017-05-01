var i=0;
function text_01(){
    var box=document.getElementsByClassName("box")[0];
    var img=box.getElementsByTagName("img");
    img[i].style.marginLeft="-600px"; 
    i++;
    if(i>=img.length){
        for(var j=0;j<img.length;j++){
            img[j].style.marginLeft="0px";
        }
    }
    setTimeout(text_01,1000);
}
text_01();