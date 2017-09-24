/**
 * Created by MintWind on 2017/2/16.
 */
//-------------------------------------------------------------------------------------------------------------------------
function $(v){
    if(typeof v==='function'){
        window.onload = v;
    }else if(typeof v==='string'){
        return document.getElementById(v);
    }else if(typeof v === 'object'){
        return v;
    }
}



//-------------------------------------------------------------------------------------------------------------------------
//获取元素样式
/*
         不要获取未设置后的样式： 不兼容
         不要获取复合样式
 */

/*
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj)[attr];
    }
}
*/
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}



//-------------------------------------------------------------------------------------------------------------------------
/*
 形参： 运动对象、运动方向（元素样式 left,top,width...）、运动速度、运动目标 回调函数
 使用示例：
           oBtn1.onclick = function(){
              doMove(oDiv,'width',12,300,function(){
              doMove(oDiv,'height',12,300);
           });
         }
 */

function doMove(obj,attr,dir,target,endFn){
    dir = parseInt(getStyle(obj,attr))<target ? dir : -dir;
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        //speed表示当前物体运动的位置
        var speed = parseInt(getStyle(obj,attr))+dir;
        if(speed>target&&dir>0||speed<target&&dir<0){
            speed = target;
        }
        oDiv.style[attr] = speed+'px';
        if(speed == target){
            clearInterval(obj.timer);
            endFn&&endFn();
        }
    },30);
}

//-------------------------------------------------------------------------------------------------------------------------

/*
 形参： 抖动对象、抖动方向（ left,top）、回调函数
 使用示例：
 oImg.onclick = function(){
 shake(oImg,'top',function(){
 alert(1);
 });
 }
 */

function shake(obj,attr,fnEnd){
    var pos = parseInt(getStyle(obj,attr));   //获取抖动目标原先的位置
    var arr = [];
    var num=0;
    for(var i=20 ; i>0 ; i-=2){
        arr.push(i,-i);
    }
    arr.push(0);
    clearInterval(obj.shake);
    obj.shake=setInterval(function(){
        obj.style[attr] = pos+arr[num]+'px';
        num++;
        if(num === arr.length){
            clearInterval(obj.shake);
            fnEnd&&fnEnd();
        }
    },50);
}