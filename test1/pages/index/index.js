Page({
  data: {
    items: ['美国','中国','巴西'],
    bottomHidden: true
  },
  showBottom: function(e){
    this.setData({
      bottomHidden: false
    })
    console.log('出来啦'+e)
  },
  closeBottom: function(e) {
    this.setData({
      bottomHidden: true
    })
    console.log('关闭啦')
  }
})