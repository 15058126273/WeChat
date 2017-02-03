var app = getApp();
var bgm = require("../../utils/bgm.js")
Page({
    data: {
        loading: true,
        toast: true
    },
    checkBGM: function() {
        var that = this;
        wx.getBackgroundAudioPlayerState({
            success: function(res){
                console.log("当前音乐状态为："+res.status)
                var status = res.status;
                
                var bgmStatus = status == 0 || status == 2? false: true;
                var bgmDisabled = status == 2? true: false;
                console.log("bgmStatus:"+bgmStatus + ",bgmDisabled:" + bgmDisabled);
                that.setData({
                    bgmStatus: bgmStatus,
                    bgmDisabled: bgmDisabled
                })
                
            }
        })
    },
    changeBGM: function(e) {
        var that = this;
        var bgmStatus = e.detail.value;
        console.log("bgmStatus:"+bgmStatus)
        if(bgmStatus){
            bgm.bgm.playBGM();
        }else{
            bgm.bgm.pauseBGM();
        }
        wx.setStorageSync("bgmStatus", bgmStatus)
        that.setData({
            bgmStatus: bgmStatus
        })
    },
    clearStorage: function() {
        var that = this;
        that.setData({
            loading: false,
            loadingText: '清理中...'
        })
        wx.clearStorage({
            success: function(res){
                console.log(res)
            },
            fail: function(e){
                console.log(e)
            },
            complete: function() {
                that.setData({
                    loading: true,
                    toast: false,
                    toastText: '清理完成'
                })
            }
        })
    },
    hideToast: function() {
        this.setData({
            toast: true
        })
    },
    enterMenu: function(e) {
        wx.navigateTo({
            url: "default/default"
        })
    },
    onReady: function() {
        var that = this;
        that.checkBGM()
        console.log("............................................setting onReady")
    },
    onShow: function(){
        console.log("..............................................setting onShow")
    },
    onHide: function() {
        console.log("............................................setting onHide")
    },
    onPullDownRefreash: function() {
        console.log("下拉了")
        wx.stopPullDownRefresh()
    }
})