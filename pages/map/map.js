// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    makers:[{
      latitude:38.89,
      longitude:121.54,
      scale:24,
      name:"源文科技",
      desc:'我在这里'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getLocation({
      type : 'wgs84',
      success: function(res) {
        var longitude = res.longitude, latitude = res.latitude;
        _this.setData({
          location : {
            latitude : latitude,
            longitude : longitude
          },
          markers2:[{
            latitude : latitude,
            longitude : longitude,
            name : '软景中心-源文科技',
            desc : '专注技术'
          }]
        });
      },
    })
  },

  showLocation:function(e){
    var _this = this;
    var locaton = _this.data.location;
    wx.openLocation({
      latitude: locaton.latitude,
      longitude: locaton.longitude,
      scale:28,
      name:'大连源文信息科技有限公司',
      address:'软景中心A座2004'
    })
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