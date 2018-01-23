// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    test: '',
    showView: "none",
    showView2:"none"
  },
  // 获取input的val
  inputVal: function(e){
    var that = this;
    this.setData({
      inputVal : e.detail.value
    })
    if (e.detail.value.trim().length){
      that.setData({
        showView: "block"
      })
    }else{
      that.setData({
        showView: "none"
      })
    }
  },
  // 清楚搜索框内容
  clearBtn:function(e){
    this.setData({
      inputVal: ' ',
      showView:"none",
      showView2:"none"
    })
    console.log(this.data.inputVal);
    return;
  },
  // 将val传给test
  searchBtn: function(e){
    if (this.data.inputVal.trim().length) {
      this.setData({
        showView2: "block"
      })
    } else {
      this.setData({
        showView2: "none"
      })
    }
    this.setData({
      test: this.data.inputVal
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showView: (options.showView == "true" ? true : false)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})