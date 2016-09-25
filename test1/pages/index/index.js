//index.js
//获取应用实例
var app = getApp()
var str1 = "dsdsdsdsdsdsds43kfdvfehf84ytiuh";
str1 = str1.substr(0, 10)
console.log(str1 + '...')
Page({
  data: {

    motto: app.globalData.app_data,
    userInfo: {}
  },
  toIndex2: function(){
    wx.navigateTo({
      url: 'index2'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
