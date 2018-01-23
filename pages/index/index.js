//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    listData:[],
    listDataSize:0
  },
  // 打开乐跑详情页
  openBook: function () {
    wx.navigateTo({
      url: '../details/details?matchEventId='
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var that = this;
    wx.request({
      url: app.url + "wechat/competition/getMatchPages",
      method: "POST",
      data: {
        pageNo: 1,
        pageCount: 100
      }, 
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      // header: {
      //   "Content-Type": "application/json"
      // },
      success: function(res){
        if (res.data.resultCode == "0000"){
          var item = res.data.data;
          for (var i= 0; i < item.length;i++){
            if (i %2 == 0){
              item[i].zshow = true;
            }else{
              item[i].zshow = false;
            }
          }
          that.setData({
            listData: item,
            listDataSize:item.size
          })
        }
      }
    })
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
