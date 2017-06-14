require.config({
    paths: {
        jquery: "vendor/jquery-1.12.0.min",
        widget:"widget",
        sbr:"sbr"
    }
})

require(["jquery","sbr"],function ($,sbr) {
    
    new sbr.sbr({
        triggerBtnId:"triggerBtn",
        boxId:"sbr_sidebar"
    }).on("visBox",function () {
        console.log("vis");
    }).on("hidBox",function () {
        console.log("hid");
    })
})
