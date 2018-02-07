// pages/canvas/canvas.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  mytouchstart: function (e) {
    console.log('touchstart')
  },
  mytouchmove: function (e) {
    console.log('touchmove')
  },
  mytouchend: function (e) {
    console.log('touchend')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    //canvas1:
    var context = wx.createCanvasContext('canvas1')
    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()

    //canvas2:
    context = wx.createCanvasContext('canvas2');
    context.rect(5, 5, 30, 30);
    context.stroke();
    //缩放:
    context.scale(2, 2);
    context.stroke();
    context.scale(2, 2);
    context.stroke();
    context.draw();

    //canvas3:
    context = wx.createCanvasContext('canvas3')
    context.rect(30, 30, 100, 100);
    context.stroke();
    //旋转:
    context.rotate(1.0);
    context.stroke();
    context.draw();

    //canvas4:
    context = wx.createCanvasContext('canvas4');
    context.rect(30, 30, 100, 100);
    context.stroke();
    //平移
    context.translate(10, 10);
    context.stroke();
    context.draw();


    //存储:
    var context = wx.createCanvasContext('canvas5');
    context.setFillStyle("#FF00FF")
    context.setStrokeStyle("#00FFFF")
    context.setGlobalAlpha(1)
    context.setShadow(10, 10, 10, '#000000')
    context.setFontSize(18)
    context.setLineWidth(3)
    context.setLineCap('round');
    context.setLineJoin('round');
    context.rect(50, 50, 100, 100);
    context.fill();
    context.stroke();
    context.draw();
  },

  saveAction:function(e){
    wx.canvasToTempFilePath({
      canvasId: 'canvas5',
      success:function(res){
        console.log(res.tempFilePath);
      }
    })
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