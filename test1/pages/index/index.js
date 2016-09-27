var types = ['default', 'primary', 'warn']
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  }
}

function ss(t){
  pageObject[t] = function(e) {
      var key = t + 'Size'
      var changedData = {}
      changedData[key] = this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
}
for (var i = 0; i < types.length; i++) {
  ss(types[i])  
}

// for (var i = 0; i < types.length; ++i) {
//   (function(type) {
//     pageObject[type] = function(e) {
//       var key = type + 'Size'
//       var changedData = {}
//       changedData[key] =
//         this.data[key] === 'default' ? 'mini' : 'default'
//       this.setData(changedData)
//     }
//   })(types[i])
// }

Page(pageObject)
