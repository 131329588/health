// pages/clockdetail/clockdetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: "",
        exerciseStatus: "",
        mentalStatus: "",
        physicalStatus: "",
        sleepTime: "",
        weight: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log("打卡详情页", options);
 // 在页面加载时从参数中获取传递过来的数据
 this.setData({
    date: options.date || "",
    exerciseStatus: options.exerciseStatus || "",
    mentalStatus: options.mentalStatus || "",
    physicalStatus: options.physicalStatus || "",
    sleepTime: options.sleepTime || "",
    weight: options.weight || ""
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