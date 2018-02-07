// pages/checkbox/checkbox.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    item: [
      { 'name': '俄罗斯', 'value': 'RS', 'disabled': false },
      { 'name': '美国', 'value': 'US', 'disabled': false },
      { 'name': '中国', 'value': 'CN', 'disabled': false, 'checked': true },
      { 'name': '英国', 'value': 'UK', 'disabled': false },
      { 'name': '日本', 'value': 'JP', 'disabled': true }
    ]
  },

  changed:function(e)
  {
    console.log('你选择了'+e.detail.value);
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