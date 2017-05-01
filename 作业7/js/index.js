function text_01(){
    var div=document.getElementsByClassName("box")[0];
    var arr=["*","**","***","****","*****"];
    var arr1=["* * * * *","* * * *","* * *","* *","*"];
    var ar=[];
    ar["a1"]="*";
    ar["a2"]="**";
    ar["a3"]="***";
    ar["a4"]="****";
    ar["a5"]="*****";
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    for(var i=0;i<arr1.length;i++){
        console.log(arr1[i]);
    }

    for(var key in ar){
        console.log(ar[key]);
    }
    var i="";
    for(var j=0;j<=5;j++){
        document.write((i+="*")+"<br/>");
    }
    var l="-";
    var k="*";
    for(var j=1;j<=5;j++){
        for(var n=5;n>=j;n--){
            document.write(l+"&nbsp;&nbsp;");
        }
        for(var n=1;n<=j;n++){
            document.write(k+"&nbsp;&nbsp;");
        }
        document.write("<br/>");
    } 
    for(var j=1;j<=5;j++){
        for(var n=5;n>=j;n--){
            document.write(l+"&nbsp;&nbsp;");
        }
        for(var n=1;n<=j;n++){
            document.write(k+"&nbsp;&nbsp;");
        }
        for(var n=2;n<=j;n++){
            document.write(k+"&nbsp;&nbsp;");
        }
        document.write("<br/>");
    }
}
text_01();
function text_02(){
    /*
    可以存不同的数据类型
     */
    var arr=[1,true,"String"];
    console.log(arr);
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]);
    }

    /*
    数组赋值给变量时，其实赋值的是地址。
     */
    var a=[1,2,3,4,5];
    var b=a;
    b[0]=0;
    console.log("a:"+a);
    console.log("b:"+b);

    /*
    数组的下标越界异常
     */
    console.log("a:"+a[5]);

    var c=10;
    var d=c;
    d++;

    console.log("c:"+c,"d:"+d);


    /*
    倒序遍历和跳序遍历
     */
    var at=[12,33,55,4,85,77,44];
    for(var i=at.length-1;i>=0;i--){
        console.log(at[i]);
    }

    /*奇数跳序遍历*/
    for(var i=0;i<at.length;i+=2){
        console.log(at[i]);
    }
    /*偶数跳序遍历*/
    for(var i=1;i<at.length;i+=2){
        console.log(at[i]);
    }


    /*拼接数组*/
    var arr1=[1,2,3,4,5];
    var arr2=[11,22,33];
    var arr3=arr1.concat(44,55,arr2);
    console.log(arr3);
    /*这样拼接数组，数组不会改变原来的元素*/
    console.log(arr1);


    /*获取子数组 slice() 不修改原数组*/
    var arr4=[1,2,3,4,5,6,7,8,9];
    var arr5=arr4.slice(5,8);
    var arr6=arr4.slice(0,5);

    /*包头不包尾
      第一个取得是你要取得下标，
      第二个是你要取到的，但是这个最后的值不会取出，
      如果不给它就把最后一个也取出来
    */
    console.log(arr5);
    console.log(arr6);

    /*修改数组splice*/
    var arr7=[1,2,3,4,5];
    /*
    第一个值是数组的下标，
    第二个值是n时,就是说我选中的下标开始第n个都被删除,
    当有第三个值时，可能是插入的新的元素，也可能是替换的新元素
     */
    arr7.splice(0,2,11,22);
    arr7.splice(0,0,11,22);
    console.log(arr7);

    /*排序*/
    var arr8=[21,51,31,14,15,14,21,51];
    arr8.sort();
    console.log(arr8);

    /*颠倒数组*/
    arr8.reverse();
    console.log(arr8);

    /*从小到大*/
    arr8.sort(compare);
    function compare(value1, value2) {
        if (value1 > value2) {
            return -1;
        } else if (value1 < value2) {
            return 1;
        } else {
            return 0;
        }
    }
    console.log(arr8);
    /*取最小值*/
    console.log(arr8[arr8.length-1]);

    /*取最大值*/
    var arr81=[31,6,4,7,98,32,4,84,5]
    arr81.sort(com);
    function com(value1, value2) {
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    }
    console.log(arr81);
    console.log(arr8[arr81.length-1]);

    /*删除重复的值*/
    var arr9=[1,1,2,2,3,2,3,1];
    arr9.sort();
    for(var j=0;j<arr9.length;){
        if(arr9[j]==arr9[j+1]){
            arr9.splice(j,1);
        }else{
            j++;
        }
    }
    console.log("arr9:"+arr9);

    /*删除重复*/
    var ar03=[1,5,84,15,4,1,3,3644,1,84];
    var ar04=[];
    for(var j=0;j<ar03.length;j++){
        if(ar04.indexOf(ar03[j])==-1){
            ar04.push(ar03[j]);
        }
    }
    console.log("ar03:"+ar03);
    console.log("ar04:"+ar04);


    /*循环遍历二维数组*/
    var cs=[];
    cs["河南省"]=['郑州市','焦作市','濮阳市'];
    cs["山东省"]=['青岛市','日照市','烟台市'];
    cs["河北省"]=['石家庄市','廊坊市','邯郸市'];

    for(var key in cs){
        console.log(cs[key]);
        for(var k in cs[key]){
                console.log(cs[key][k]);
        }
    }


    /*冒泡排序*/
    var ar05=[5,3,6,1,48,58,1,4,52,14,5,5,69,521,5,5,7];
    console.log("ar05:"+ar05);
    var dy=0;
    for(var i=0;i<ar05.length;i++){
        for(var j=0;j<ar05.length-i;j++){
            if(ar05[j]>ar05[j+1]){
                dy=ar05[j];
                ar05[j]=ar05[j+1];
                ar05[j+1]=dy;
            }
        }
    }
    console.log("ar05:"+ar05);


    /*添加删除的数组数组*/
    var ar06=[1,5,2,44,5,4,84,4];
    console.log("删除前:"+ar06);
    var t=ar06.splice(0,ar06.length-1);
    console.log("删除后:"+ar06);
    for(var j=0;j<t.length;j++){
        ar06.splice(ar06.length,0,t[j]);
    }
    console.log("添加:"+ar06);

}
text_02();