var touch = {
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
        that.hasOwnProperty("originX") && that.hasOwnProperty("originY") && that.originX < 100
        && that.hasOwnProperty("currentX") && that.hasOwnProperty("currentY") 
        && that.currentX - that.originX > 100 && Math.abs(that.currentY - that.originY) < 50 
        && wx.navigateBack();
        that.hasOwnProperty("originX") && delete that.originX;
        that.hasOwnProperty("originY") && delete that.originY;
        that.hasOwnProperty("currentX") && delete that.currentY;
        that.hasOwnProperty("currentY") && delete that.currentY;
    }
}

module.exports = {
    touch: touch
}