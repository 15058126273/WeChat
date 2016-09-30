var app = getApp();
Page({
    data: {
        games: [
            {name: '游戏1',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/1.jpg'},
            {name: '游戏2',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/2.jpg'},
            {name: '游戏3',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/3.jpg'},
            {name: '游戏4',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/4.jpg'},
            {name: '游戏5',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/5.jpg'},
            {name: '游戏6',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/6.jpg'},
            {name: '游戏7',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/7.jpeg'},
            {name: '游戏8',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/8.jpeg'},
            {name: '游戏9',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/9.jpg'},
            {name: '游戏10',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/10.jpg'},
            {name: '游戏11',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/11.jpg'},
            {name: '游戏12',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/12.jpg'},
        ]
    },
    playGame: function(e){
        console.log(e)
        wx.navigateTo({
            url: '/page/game/game/game'
        })
    }
})