var bgm = {
    bgmUrl: 'http://ok.96x.cn/2015/7yue_2651.cn/简单爱%20-%20周杰伦.mp3',
    bgmTitle: '简单爱',
    bgmAuto: false,
    bgmLoop: true,
    playBGM: function() {
        var that = this;
        wx.playBackgroundAudio({
            dataUrl: that.bgmUrl,
            title: that.bgmTitle,
        })
    },
    listenBGM: function() {
        var that = this;
        if(that.bgmAuto){
            wx.setStorageSync("bgmStatus", true);
        }else{
            wx.setStorageSync("bgmStatus", false);
        }
        wx.onBackgroundAudioPlay(function () {
            console.log("监听到播放音乐");
            if(that.hasOwnProperty("bgmProcess")){
                wx.seekBackgroundAudio({
                   position: that.bgmProcess
                })
                delete that.bgmProcess;
            }
        })
        wx.onBackgroundAudioPause(function() {
            console.log("监听到暂停音乐")
            wx.getBackgroundAudioPlayerState({
                success: function(res) {
                    that.bgmProcess = res.currentPosition;
                    console.log("暂停音乐记录时间为："+that.bgmProcess);
                }
            })
        })
        wx.onBackgroundAudioStop(function() {
            console.log("监听到停止音乐")
            that.hasOwnProperty("bgmProcess") && delete that.bgmProcess;
            that.bgmLoop && that.playBGM();
        })
    },
    pauseBGM: function() {
        wx.pauseBackgroundAudio()
    }
}

module.exports = {
    bgm: bgm
}