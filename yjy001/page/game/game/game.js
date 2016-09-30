var app = getApp();
Page({
    data: {
        
    },
    touchStart: function(e) {
        app.touchStart(this, e)
    },
    touchMove: function(e){
        app.touchMove(this, e)
    },
    touchCancel: function(e){
        app.touchCancel(this, e)
    },
    touchEnd: function(e){
        app.touchEnd(this, e)
    }
})