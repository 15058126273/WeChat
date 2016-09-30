var app = getApp();
Page({
    data: {
        loading: true,
        toast: true
    },
    checkBGM: function() {
        var that = this;
        wx.getBackgroundAudioPlayerState({
            success: function(res){
                var status = res.status;
                var bgmStatus = status == 0 || status == 2? false: true;
                var bgmDisabled = status == 2? true: false;
                that.setData({
                    bgmStatus: bgmStatus,
                    bgmDisabled: bgmDisabled
                })
            },
            fail: function() {
                console.log('获取背景音乐状态出错了')
            }
        })
    },
    changeBGM: function(e) {
        var bgmStatus = e.detail;
        if(bgmStatus){
            app.playBGM();
        }else{
            app.pauseBGM();
        }
        
        this.checkBGM();
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
    }
})