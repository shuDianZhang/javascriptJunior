/**
 * Created by MintWind on 2017/2/16.
 */

function $(v){
    if(typeof v==='function'){
        window.onload = v;
    }else if(typeof v==='string'){
        return document.getElementById(v);
    }else if(typeof v === 'object'){
        return v;
    }
}


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



