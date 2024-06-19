// pages/clock/clock.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 从本地取出打卡记录
        wx.getStorage({
            key:'healthData',
            success:(res) => {
                console.log("帖子列表界面信息取出成功！", res);
                this.setData({
                    dataList:res.data
                })

            }, fail:(err) => {
                console.log("帖子列表界面信息取出失败！",err);
                wx.showToast({
                  title: '记录不存在！',
                  icon:'error'
                })
                setTimeout(function () {
                    wx.navigateBack()
                }, 1000)
            }
        })
    },

      // 跳转到详情页
  navigateToDetail: function (event) {
    const index = event.currentTarget.dataset.index; // 获取点击的数据索引
    const selectedItem = this.data.dataList[index];

    // 使用 wx.navigateTo 跳转到详情页，并传递选中的数据
    wx.navigateTo({
      url: `/pages/clockdetail/clockdetail?date=${selectedItem.date}&exerciseStatus=${selectedItem.exerciseStatus}&mentalStatus=${selectedItem.mentalStatus}&physicalStatus=${selectedItem.physicalStatus}&sleepTime=${selectedItem.sleepTime}&weight=${selectedItem.weight}`,
    });
  },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})