
Page({
    data: {
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