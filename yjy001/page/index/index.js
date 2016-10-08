
Page({
    data: {
        menus: [
            {name: '菜单1',page: 'child1',color: 'red'},
            {name: '菜单2',page: 'child2',color: 'green'},
            {name: '菜单3',page: 'child3'},
            {name: '菜单4',page: 'child4',color: 'yellow'},
            {name: '菜单5',page: 'child5',color: 'blue'}
            ],
        swiper_index: 0,
        swiper_interval: 3000,
        swiper_duration: 1000,
        swiper_items: [
            {name: '1', src: '/resource/image/swiper/1.jpg'},
            {name: '2', src: '/resource/image/swiper/2.jpg'},
            {name: '3', src: '/resource/image/swiper/3.jpg'},
            {name: '4', src: '/resource/image/swiper/4.jpg'},
        ]
    },
    swiperChange: function(e) {
        //console.log(e)
    },
    openChild: function(e){
        var child = e.currentTarget.dataset.child;
        console.log(child);
        wx.navigateTo({
            url: '/page/index/child/child'
        })
    },
    onReady: function() {
        console.log("............................................index onReady")
    },
    onShow: function(){
        console.log("..............................................index onShow")
    },
    onHide: function() {
        console.log("............................................index onHide")
    }
})