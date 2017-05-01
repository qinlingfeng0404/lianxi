/*第一个*/
function text_01(){
    var img_main=document.getElementsByClassName("img_main")[0];
    var I=img_main.getElementsByTagName("img")[0];
    var L=document.getElementsByClassName("left")[0];
    var R=document.getElementsByClassName("right")[0];
    var p1=document.getElementsByClassName("img_p1")[0];
    var p2=document.getElementsByClassName("img_p2")[0];
    var num=0;

    var imgs=["images/ruiwen1.jpg","images/ruiwen2.jpg","images/ruiwen3.jpg","images/ruiwen4.jpg","images/ruiwen5.jpg"]

    var wenzi=["文字一","文字二","文字三","文字四","文字五"];
        
    function text_04(){
        I.src=imgs[0];
        p1.innerText=num+1+'/'+imgs.length;
        p2.innerText=wenzi[0];
    }
    text_04();

/*    L.onclick=function(){
        num++;
        console.log(num);
        if(num>=imgs.length){
            num=0;
        }
        text_04();
    }
    R.onclick=function(){
        num--;
        if(num<=-1){
            num=imgs.length-1;
        }
        text_04();
    }*/
    L.onclick=function(){
        num++;
        if(num>=5){
            num=0;
        }
        var S=imgs.splice(0,1);
        var W=wenzi.splice(0,1);
        imgs.splice(imgs.length,0,S[0]);
        wenzi.splice(wenzi.length,0,W[0]);
        text_04();
    }
    R.onclick=function(){
        num--;
        if(num<=-1){
            num=imgs.length-1;
        }
        var S=imgs.splice(0,imgs.length-1);
        var W=wenzi.splice(0,wenzi.length-1);
        for(var i=0;i<S.length;i++){
            imgs.splice(imgs.length,0,S[i]);
        }
        for(var i=0;i<W.length;i++){
            wenzi.splice(imgs.length,0,W[i]);
        }
        text_04();
    }
}
text_01();
/*第二个*/
function text_02(){
    var list=document.getElementsByClassName("list")[0];
    var list_p=list.getElementsByTagName("p");
    var list_main=document.getElementsByClassName("list_main")[0];
    var main_p=list_main.getElementsByTagName("p")[0];
    var main_span=list_main.getElementsByTagName("span")[0];
    var p1 = [
            "元旦：",
            "春节：",
            "妇女节：",
            "清明节：",
            "劳动节：",
            "端午节：",
            "小暑：",
            "七夕节：",
            "中秋节：",
            "国庆节：",
            "立冬：",
            "艾滋病日: "
        ];
    var p2 = [
            "1月1日至3日放假三天。",
            "2月2日至8日放假7天。",
            "3月8日妇女节，与我无关。",
            "4月3日至5日放假3天",
            "4月30日至5月2日放假3天。",
            "6月4日至6日放假3天。",
            "7月7日小暑。不放假。",
            "8月6日七夕节。不放假。",
            "9月10日至12日放假3天。",
            "10月1日至7日放假7天。",
            "11月8日立冬。不放假。",
            "12月1日"
    ];
    for(var i=0;i<list_p.length;i++){
        list_p[i].index=i;
        list_p[i].onmousemove=function(){
            this.style.backgroundColor="#FFF";
            var list_span=this.getElementsByTagName("span");
            for(var i=0;i<list_span.length;i++){
                list_span[i].style.color="#FF6699";
            }
            main_p.innerText=p1[this.index];
            main_span.innerText=p2[this.index];
        }
        list_p[i].onmouseout=function(){
            this.style.backgroundColor="#424242";
            var list_span=this.getElementsByTagName("span");
            for(var i=0;i<list_span.length;i++){
                list_span[i].style.color="#FFF";
            }
            main_p.innerText="";
            main_span.innerText="";
        }
    }
}
text_02();
/*第三个*/
function text_03(){
    var box_main=document.getElementsByClassName("box_main")[0];
    var main_select=box_main.getElementsByTagName("select")[0];
    var main_select1=box_main.getElementsByTagName("select")[1];
    var select=null;
    var cityList=new Array();
    cityList['北京市'] = ['朝阳区', '东城区', '西城区', '海淀区', '宣武区', '丰台区', '怀柔', '延庆', '房山'];
    cityList['上海市'] = ['宝山区', '长宁区', '丰贤区', '虹口区', '黄浦区', '青浦区', '南汇区', '徐汇区', '卢湾区'];
    cityList['广州省'] = ['广州市', '惠州市', '汕头市', '珠海市', '佛山市', '中山市', '东莞市'];
    cityList['深圳市'] = ['福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
    cityList['重庆市'] = ['俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
    cityList['天津市'] = ['和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'];
    cityList['江苏省'] = ['南京市', '苏州市', '无锡市'];
    cityList['浙江省'] = ['杭州市', '宁波市', '温州市'];
    cityList['四川省'] = ['四川省', '成都市'];
    cityList['海南省'] = ['海口市'];
    cityList['福建省'] = ['福州市', '厦门市', '泉州市', '漳州市'];
    cityList['山东省'] = ['济南市', '青岛市', '烟台市'];
    cityList['江西省'] = ['江西省', '南昌市'];
    cityList['广西省'] = ['柳州市', '南宁市'];
    cityList['安徽省'] = ['安徽省', '合肥市'];
    cityList['河北省'] = ['邯郸市', '石家庄市'];
    cityList['河南省'] = ['郑州市', '洛阳市'];
    cityList['湖北省'] = ['武汉市', '宜昌市'];
    cityList['湖南省'] = ['湖南省', '长沙市'];
    cityList['陕西省'] = ['陕西省', '西安市'];
    cityList['山西省'] = ['山西省', '太原市'];
    cityList['黑龙江省'] = ['黑龙江省', '哈尔滨市'];
    cityList['其他'] = ['其他'];
    for(var key in cityList){
        main_select.add(new Option(key,key),null);
    }
    main_select.onchange=function(){
        select=main_select.value;
        main_select1.options.length=1;
        for(var k in cityList[select]){
            main_select1.add(new Option(cityList[select][k],cityList[select][k]),null);
        }
    }
}
text_03();