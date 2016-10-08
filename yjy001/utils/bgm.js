var bgm = {
    bgmUrl: 'http://ok.96x.cn/2015/7yue_2651.cn/简单爱%20-%20周杰伦.mp3',
    bgmTitle: '简单爱',
    playBGM: function() {
        var that = this;
        wx.playBackgroundAudio({
            dataUrl: that.bgmUrl,
            title: that.bgmTitle,
        })
    },
    listenBGM: function() {
        var that = this;
        wx.onBackgroundAudioPlay(function () {
            wx.getBackgroundAudioPlayerState({
                success: function(res) {
                    that.bgmLength = res.duration;
                    that.hasOwnProperty("bgmProcess") && that.hasOwnProperty("bgmLength") && that.bgmLength - that.bgmProcess > 1 && wx.seekBackgroundAudio({
                        position: that.bgmProcess
                    })
                }
            })
            
        })
        wx.onBackgroundAudioPause(function() {
            wx.getBackgroundAudioPlayerState({
                success: function(res) {
                    that.bgmProcess = res.currentPosition;
                }
            })
        })
        wx.onBackgroundAudioStop(function() {
            that.hasOwnProperty("bgmProcess") && delete that.bgmProcess;
            that.playBGM()
        })
    },
    pauseBGM: function() {
        wx.pauseBackgroundAudio()
    }
}

module.exports = {
    bgm: bgm
}