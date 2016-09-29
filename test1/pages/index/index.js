Page({
  mytap: function(e){
    wx.request({
      url: 'http://www.55cat.com',
      success: function(data) {
        console.log(data)
      }
    })
    

  }
})