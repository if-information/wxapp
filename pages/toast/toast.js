// pages/toast/toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  showToast:function(e)
  {
    var that = this;
    wx.showToast({
      title: '成功',
      icon:'info',
      duration:2000,
      success:that.flySucess,
      fail:that.flyFail,
      complete:that.flyComplete
    })
  },

  flySuccess: function (e) {
    console.log(e);
    console.log("起飞成功！");
  },
  flyFail: function (e) {
    console.log(e);
    console.log("起飞失败！")
  },
  flyComplete: function (e) {
    console.log(e);
    console.log("起飞结束！")
  },
  loadingSuccess: function (e) {
    console.log(e);
    console.log("加载成功！");
  },
  loadingFail: function (e) {
    console.log(e);
    console.log("加载失败！")
  },
  loadingComplete: function (e) {
    console.log(e);
    console.log("加载结束！")
  },

  hideToast:function (e) {
    var that = this;
    wx.showToast({
      title: '加载中',
      icon:'loading',
      duration:2000,
      success:that.loadingSuccess,
      fail:that.loadingFail,
      complete:that.loadingComplete
    });
    setTimeout(function(){
      wx.hideToast();
    }, 2000);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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