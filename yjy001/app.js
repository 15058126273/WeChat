
App({
    globalData: {
        bgmUrl: 'http://ok.96x.cn/2015/7yue_2651.cn/简单爱%20-%20周杰伦.mp3',
        bgmTitle: '简单爱'
    },
    playBGM: function() {
        var that = this;
        // wx.playBackgroundAudio({
        //     dataUrl: that.globalData.bgmUrl,
        //     title: that.globalData.bgmTitle,
        //     success: function(e){
        //         console.log("播放背景音乐成功"+e)
        //     },
        //     fail: function(e){
        //         console.log("播放背景音乐fail:"+e)
        //     },
        //     complete: function(){
        //         console.log("播放背景音乐complete")
        //     }
        // })
    },
    pauseBGM: function() {
        wx.pauseBackgroundAudio()
    },
    onLaunch: function(){
        console.log('..........................................app onLaunch');
    },
    onShow: function(){
        var that = this;
        this.playBGM()
        wx.onBackgroundAudioStop(function() {
            that.playBGM()
        })
        console.log('..........................................app onShow');
    },
    onHide: function() {
        console.log('..........................................app onHide');
    },
    touchStart: function(that,e) {
        that.originX = e.touches[0].pageX;
        that.originY = e.touches[0].pageY;
        that.currentX = e.touches[0].pageX;
        that.currentY = e.touches[0].pageY;
    },
    touchMove: function(that,e){
        that.currentX = e.touches[0].pageX;
        that.currentY = e.touches[0].pageY;
    },
    touchCancel: function(that,e){
        that.hasOwnProperty("originX") && delete that.originX;
        that.hasOwnProperty("originY") && delete that.originY;
        that.hasOwnProperty("currentX") && delete that.currentY;
        that.hasOwnProperty("currentY") && delete that.currentY;
    },
    touchEnd: function(that,e){
        console.log(that.currentX +":"+ that.originX+"....."+that.currentY +":"+ that.originY)
        if(that.hasOwnProperty("originX") && that.hasOwnProperty("originY") && that.originX < 100
        && that.hasOwnProperty("currentX") && that.hasOwnProperty("currentY")){
            if(that.currentX - that.originX > 100 && Math.abs(that.currentY - that.originY) < 50 ){
                wx.navigateBack();
            }
        }
        that.hasOwnProperty("originX") && delete that.originX;
        that.hasOwnProperty("originY") && delete that.originY;
        that.hasOwnProperty("currentX") && delete that.currentY;
        that.hasOwnProperty("currentY") && delete that.currentY;
    }



})