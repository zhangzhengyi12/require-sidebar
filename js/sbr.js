/**
 * Created by zhang on 6/6/2017.
 */


define(["jquery","widget"],function ($,wid) {
    function Sbr(cfg) {
        this.config = {
            triggerBtnId:"triggerBtn",
            boxId:"sbr_sidebar"
        }
        
        $.extend({},this.config,cfg);
        
        this.render();
        
    }
    
    Sbr.prototype = $.extend({},new wid.widget(),{
        bindUI:function () {
            var that = this;
            this._btn.bind("click",function () {
                that.visBox();
                that.fire("visBox");
            })
            
            this._mask.bind("click",function () {
                that.hidBox();
                that.fire("hidBox");
            })
        },
        setBox:function () {
            //基本盒子组件的存储 mask的建立
            
            this._btn = $("#"+this.config.triggerBtnId);
            this._box = $("#"+this.config.boxId)
            
            //Mask
            
            this._mask = $("<div id='sbr_mask'><div>")
            this._mask.hide();
            $("body").append(this._mask);
            
        },
        visBox:function () {
            //显示盒子 利用动画 和创建模态
            this._box.animate({
                right:"0px"
            })
            
            this._mask.show();
        },
        hidBox:function () {
            console.log("hidbox");
            this._box.animate({
                right:"-300px"
            })
            
            this._mask.hide();
        }
        
    })
    
    
    return{
        sbr:Sbr
    }
})
