var app = getApp();
Page({
    data: {
        games: [
            {name: '游戏1', unique: 'unique_1',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/1.jpg'},
            {name: '游戏2', unique: 'unique_2',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/2.jpg'},
            {name: '游戏3', unique: 'unique_3',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/3.jpg'},
            {name: '游戏4', unique: 'unique_4',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/4.jpg'},
            {name: '游戏5', unique: 'unique_5',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/5.jpg'},
            {name: '游戏6', unique: 'unique_6',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/6.jpg'},
            {name: '游戏7', unique: 'unique_7',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/7.jpeg'},
            {name: '游戏8', unique: 'unique_8',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/8.jpeg'},
            {name: '游戏9', unique: 'unique_9',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/9.jpg'},
            {name: '游戏10', unique: 'unique_10',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/10.jpg'},
            {name: '游戏11', unique: 'unique_11',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/11.jpg'},
            {name: '游戏12', unique: 'unique_12',desc: '这里是游戏的描述啦..',path: '',image: '/resource/image/game/12.jpg'},
        ]
    },
    playGame: function(e){
        console.log(e)
        wx.navigateTo({
            url: '/page/game/game/game'
        })
    }
})