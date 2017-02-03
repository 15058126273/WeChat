
Page({
    data: {
        menus: [
            {name: '菜单1',unique: 'unique_0', page: 'child1',color: 'red'},
            {name: '菜单2',unique: 'unique_1',page: 'child2',color: 'green'},
            {name: '菜单3',unique: 'unique_2',page: 'child3'},
            {name: '菜单4',unique: 'unique_3',page: 'child4',color: 'yellow'},
            {name: '菜单5',unique: 'unique_4',page: 'child5',color: 'blue'}
            ],
        swiper_index: 0,
        swiper_interval: 3000,
        swiper_duration: 1000,
        swiper_items: [
            {name: '1',unique: 'unique_0', src: '/resource/image/swiper/1.jpg'},
            {name: '2',unique: 'unique_1', src: '/resource/image/swiper/2.jpg'},
            {name: '3',unique: 'unique_2', src: '/resource/image/swiper/3.jpg'},
            {name: '4',unique: 'unique_3', src: '/resource/image/swiper/4.jpg'}
        ],
        newses: [
            {name: '这是一条类似新45435435闻把！！', unique: 'unique_0'},
            {name: '这是一条类似45435新闻把！！', unique: 'unique_1'},
            {name: '这是一条类似34新闻把！！', unique: 'unique_2'},
            {name: '这是一条类似新234324闻把！！', unique: 'unique_3'},
            {name: '这是一条类似新闻把！！', unique: 'unique_4'},
            {name: '这是一条类似435435新闻把！！', unique: 'unique_5'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
            {name: '这是一条类似新闻把！！', unique: 'unique_6'},
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
    openNews: function(e) {
        wx.navigateTo({
            url: '/page/index/news/news'
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