// pages/modal/modal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  showModal1:function(e)
  { 
    wx.showModal({
      title: '提示',
      content: '这是一个简单设置的弹窗',
      success:function(res){
        if(res.confirm)
        {
          console.log('用户点击了确定');
        }
      }
    })
  },

  showModal2: function (e){
    wx.showModal({
      title: '提示',
      content: '这是一个设定过全部属性的模态弹窗',
      showCancel: true,
      confirmText: '好的',
      confirmColor: '#FF0000',
      cancelText:'算了',
      cancelColor:'#999999',
      success:function(res){
        if(res.confirm)
        {
          console.log('用户点击确定');
        }
        else
        {
          console.log('用户点击取消');
        }
      },
      fail:function(){
        console.log('接口调动失败');
      },
      complete:function(){
        console.log('接口调用结束');
      }
    })
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