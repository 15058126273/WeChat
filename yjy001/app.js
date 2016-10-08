var bgm = require("utils/bgm.js")
App({
    globalData: {
        
    },
    onLaunch: function(){
        console.log('..........................................app onLaunch');
    },
    onShow: function(){
        var that = this;
        bgm.bgm.listenBGM();
        wx.getStorageSync("bgmStatus") && bgm.bgm.playBGM();
        console.log('..........................................app onShow');
    },
    onHide: function() {
        console.log('..........................................app onHide');
    }



})