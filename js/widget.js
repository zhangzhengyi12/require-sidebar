/**
 * Created by zhang on 6/6/2017.
 */

define(["jquery"],function ($) {
    function Widget() {
        this.handlers = {};
    }
    
    Widget.prototype = {
        render:function () {
            this.setBox(); //初始化 比如容器内容的存放
            this.bindUI(); //绑定事件
        },
        bindUI:function () {
        
        },
        setBox:function () {
        
        },
        visBox:function () {
        
        },
        hidBox:function () {
        
        },
        on:function (type,handler) {
            if(typeof this.handlers[type] == "undefined"){
                console.log(type);
                this.handlers[type] = [];
            }//如果在字典中响应类型没有事件存储 就创建一个数组以便村粗
        
            this.handlers[type].push(handler);
            return this;
        },
        fire:function (type,data) {
            //检测相应类型数组是否存在 存在则全部吐出来执行
            //如果传进来了输入就放入参数之中调用
            if(this.handlers[type] instanceof Array){
                var handlers = this.handlers[type];
                for(var i=0,len=handlers.length; i<len; i++){
                    handlers[i](data);
                }
            }
        },
    }
    
    
    return {
        widget:Widget
    }
})
