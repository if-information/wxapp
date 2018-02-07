// pages/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['中国', '美国', '巴西', '日本', '德国', '英国', '澳大利亚'],
    index: 0,
    date: '2018-09-01',
    time: '12:01'
  },

  bindPickerChange:function(e){
    this.setData({
      index:e.detail.value
    });
  },

  bindTimeChange:function(e){
    this.setData({
      time: e.detail.value
    });
  },

  bindDateChange:function(e){
    this.setData({
      date: e.detail.value
    });
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