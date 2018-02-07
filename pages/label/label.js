// pages/label/label.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxItems: [
      { name: 'ctrip', value: '携程', checked: 'true' },
      { name: 'quna', value: '去哪儿' },
      { name: 'tuniu', value: '途牛' }
    ],
    radioItems: [
      { name: 'ctrip', value: '携程' },
      { name: 'qunar', value: '去哪儿', checked: 'true' },
      { name: 'tuniu', value: '途牛' }
    ],
    hidden: false
  },

  checkboxChange:function(e){
    var checked = e.detail.value;
    var changed = {};
    for (var i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true;
      } else {
        changed['checkboxItems[' + i + '].checked'] = false;
      }
    }
    this.setData(changed);
  },

  radioChange:function(e)
  {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },

  testLabelBindButton_1:function(e){
    console.log('触发事件1');
  },

  testLabelBindButton_2: function (e) {
    console.log('触发事件2');
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