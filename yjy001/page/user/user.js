
Page({
    data: {
        headImg: '/resource/image/user/cat.jpg',
        userSign: '那时的你一定很美！'
    },
    showHead: function(e) {
        wx.previewImage({
            urls: [e.currentTarget.dataset.img]
        })
    },
    onReady: function() {
        console.log("............................................user onReady")
    },
    onShow: function(){
        console.log("..............................................user onShow")
    },
    onHide: function() {
        console.log("............................................user onHide")
    },
    onUnload: function() {
        console.log(".............................................user onUnload")
    }
})