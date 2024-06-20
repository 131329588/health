// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        html: {

        },

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options.id);
        // 从本次加载文章数据
        wx.getStorage({
            key: 'article',
            success: (res) => {
                console.log("获取本次存储成功", res)
                this.setData({
                    html: res.data[options.id]
                })
            },
            fail(err) {
                console.log("获取本地存储失败", err)
            }
        })
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