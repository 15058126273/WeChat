var util = require("../../../utils/base.js")
Page({
    data: {
        
    },
    touchStart: function(e) {
        util.touch.touchStart(this, e)
    },
    touchMove: function(e){
        util.touch.touchMove(this, e)
    },
    touchCancel: function(e){
        util.touch.touchCancel(this, e)
    },
    touchEnd: function(e){
        util.touch.touchEnd(this, e)
    }
})